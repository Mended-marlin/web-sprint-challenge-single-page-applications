import { Link } from "react-router-dom"



export default function PromoBanner(props) {
    
    return (
       <div className="promoBanner">
            <h1>Welcome!</h1>

            <Link to="pizza" className="promoLink">Order Now!</Link>

            <p>Voted #1 for Best Imaginary Pizza!</p>
       </div> 
    )
}

// To-Do
/*
    - Make the images scroll through "reviews" showing a name, quote, and some type of rating

*/