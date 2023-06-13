import {useLocation} from 'react-router-dom'
import deliveryPug from '../imgs/pug.gif'


export default function OrderConfirmation(props) {
    const location = useLocation()
    const order = location.state
    
    
    return (
        <div className="orderConfirm">
        <img className="deliveryPug" src={deliveryPug} alt="delivery pug" style={{height:"10rem", width:"10rem"}}/>
        <h1>Order is on it's way!</h1>


        


            <div className="receipt">
                <h2 className="listTitle">Customer Information</h2>
                <ul>
                    <li><strong>Name on Order:</strong> {order.name}</li>
                </ul>
                <h2 className="listTitle">Order Details</h2>

                <h3>Toppings :</h3>
                <ul>
                    {
                     order.toppings.map(x => {
                        return <li>1x {x} </li>
                     })
                    }
                </ul>

            </div>
        

        </div>
    )
}