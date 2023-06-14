
import {useState, useEffect} from "react"
import { Link, Route, Routes } from "react-router-dom"
import OrderConfirmation from "./OrderConfirmation"
import axios from 'axios'
import {object, string, number, date, InferType} from "yup"
import Footer from "./Footer"





export default function Order(props) {
    
    const [post, setPost] = useState([])

    const [order, setOrder] = useState({
        name: "",
        size: "",
        specialInstructions: "",
        toppings: []
    })

    const formSchema = object({
        name: string().min(2, "name must be at least 2 characters")
    })

    const [errors, setErrors] = useState({
        name: ''
    })

    
    const inputChange = e => {
        const {name, value} = e.target

    formSchema.validate(order, {strict:true})
    .then(valid => {
        setErrors({
            ...errors, [name]: ""
        })
    })
    .catch(err => {
        setErrors({
            ...errors, [name]: err.errors[0]
        })
    })
    }

    useEffect(() => {
        formSchema.isValid(order).then(valid => {
            // setButtonDisabled(!valid)
        })
    },[order])

    


    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post("https://reqres.in/api/orders", order)
        .then(res => {
            setPost(res.data)
            console.log("success", res)
        })
        .catch(err => console.log(err.response))

    }
    
    const handleChange = (e) => {
        if(e.target.type === "checkbox"){
            e.target.checked ? setOrder({...order, toppings : [...order.toppings, e.target.value]}) : setOrder({...order, toppings: order.toppings.filter(top => top !== e.target.value)})
        }
        else{
            inputChange(e)
            setOrder({...order, [e.target.name]: e.target.value })
        }
        
        
    }


    return (
    <div className="orderPage">
        <form id="pizza-form" onSubmit={handleSubmit}>
            <h2>Create Your Pizza</h2>
            <label className="name">
                Name: &nbsp; 
                <input id="name-input" name="name" onChange={handleChange} type="text" placeholder="First and Last"/>
                
                
            </label>
            <div>
                { errors.name.length > 0 && <p className="error">{errors.name}</p> }
            </div><br/>

            <label className="size">
                Size: &nbsp;
                <select id="size-dropdown" name="size" onChange={handleChange}>
                    <option>Personal</option>
                    <option>Small</option>
                    <option >Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>   
            </label><br/>

            <label className="toppings" name="toppings" onChange={handleChange}>
                <p>Toppings:</p> <br/>
                <div className="checkSelect">
                    <input type="checkbox" id="mushrooms" name="mushrooms" value= "mushrooms" />
                    <label for="mushrooms">Mushrooms</label>
                </div>

                <div className="checkSelect">
                    <input type="checkbox" id="sausage" name="sausage" value="Sausage" />
                    <label for="sausage">Sausage</label>
                </div>

                <div className="checkSelect">
                    <input type="checkbox" id="bellPepper" name="bellPepper" value="Bell Pepper" />
                    <label for="bellPepper">Bell Pepper</label>
                </div>

                <div className="checkSelect">
                    <input type="checkbox" id="mystery" name="mystery" value="Mystery"/>
                    <label for="mystery">Mystery</label>
                </div>
                
            </label><br/>



            <label>
                <p>Special Instructions:</p> &nbsp; 
                <textarea id="special-text" name="specialInstructions" rows="7" cols="40" onChange={handleChange} />
            </label><br/>

            <Link onSubmit={handleSubmit} id="order-button" to="confirmation" state={order}> Place Order! </Link>
        </form>

        
        <Footer />
        
    </div>
        
        
    )
}