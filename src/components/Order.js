
import {useState} from "react"
import { Link, Route, Routes } from "react-router-dom"
import OrderConfirmation from "./OrderConfirmation"




export default function Order(props) {
    

    const [order, setOrder] = useState({
        name: "",
        size: "",
        specialInstructions: "",
        toppings: []
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(order)
        return order

    }
    
    const handleChange = (e) => {
        if(e.target.type === "checkbox"){
            e.target.checked ? setOrder({...order, toppings : [...order.toppings, e.target.value]}) : setOrder({...order, toppings: order.toppings.filter(top => top !== e.target.value)})
        }
        else{
            setOrder({...order, [e.target.name]: e.target.value })
        }
        

        console.log(order)
        
    }


    return (
    <div className="orderPage">
        <form id="pizza-form" onSubmit={handleSubmit}>
            <h2>Create Your Pizza</h2>
            <label>
                Name: &nbsp; 
                <input name="name" onChange={handleChange} type="text" placeholder="First and Last"/>
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
                <textarea name="specialInstructions" onChange={handleChange} />
            </label><br/>

            <button id="order-button">Add to Order</button>
        </form>

        <Link to="confirmation" state={order}> Test</Link>

        
    </div>
        
        
    )
}