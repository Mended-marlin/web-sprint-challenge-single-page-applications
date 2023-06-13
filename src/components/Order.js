
import {useState, useEffect} from "react"
import { Link, Route, Routes } from "react-router-dom"
import OrderConfirmation from "./OrderConfirmation"
import axios from 'axios'
import * as Yup from "yup"



export default function Order(props) {
    

    const [order, setOrder] = useState({
        name: "",
        size: "",
        specialInstructions: "",
        toppings: []
    })

    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .min(2, "name must be at least 2 characters")
        .required("Name is required")
        ,
        specialInstructions: Yup
        .string() 
    })

    const [errors, setErrors] = useState({
        name: ''
    })

    
    const inputChange = e => {
        const {name, value} = e.target

    Yup
    .reach(formSchema, name)
    .validate(value)
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
            // setButtonDisable(!valid)
        })
    },[order])

    


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        axios.post("https://reqres.in/api/orders", formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))

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
            <label>
                Name: &nbsp; 
                <input id="name-input" name="name" onChange={handleChange} type="text" placeholder="First and Last"/>
                { errors.name.length > 0 && <p className="error">{errors.name}</p> }
            </label><br/>

            <label>
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
                Toppings: <br/>
                <input type="checkbox" id="mushrooms" name="mushrooms" value= "mushrooms" />
                <label for="mushrooms">Mushrooms</label>

                <input type="checkbox" id="sausage" name="sausage" value="Sausage" />
                <label for="sausage">Sausage</label>

                <input type="checkbox" id="bellPepper" name="bellPepper" value="Bell Pepper" />
                <label for="bellPepper">Bell Pepper</label>


                <input type="checkbox" id="mystery" name="mystery" value="Mystery"/>
                <label for="mystery">Mystery</label>
            </label><br/>



            <label>
                Special Instructions: &nbsp; 
                <textarea id="special-text" name="specialInstructions" onChange={handleChange} />
            </label><br/>

            <button id="order-button">Add to Order</button>
        </form>

        <Link to="confirmation" state={order}> Test</Link>

        
    </div>
        
        
    )
}