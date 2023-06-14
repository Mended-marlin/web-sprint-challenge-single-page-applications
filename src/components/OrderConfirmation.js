import {useLocation} from 'react-router-dom'
import deliveryPug from '../imgs/pug.gif'

import Footer from "./Footer"


export default function OrderConfirmation(props) {
    const location = useLocation()
    const order = location.state
    
    
    return (
        <div className="orderConfirm">
        <img className="deliveryPug" src={deliveryPug} alt="delivery pug" />
        <h1>Pizza Pug is On the Way!</h1>


        


            <div className="receipt">
                <h2 className="listTitle">Customer Information</h2>
                <p className="receiptName">
                    Name on Order: <strong>{order.name}</strong> 
                </p>
                <h2 className="listTitle">Order Details</h2>

                <h3>Toppings :</h3>
                <ul>
                    {
                     order.toppings.map(x => {
                        return <li>1x {x} </li>
                     })
                    }
                </ul>

                {order.specialInstructions.length > 0 ? <div>
                    <h3>Special Instructions</h3>
                    <div className="instructionsConfirm" >
                        <p>{order.specialInstructions}</p>
                    </div>
                </div> 
                : null }

            </div>
        


        </div>
    )
}