import {useEffect, useState} from "react"
import reviewData from "./data"
import userPic from "../imgs/userProfilePic.jpg"


export default function Reviews(props) {
    

    const [counter, setCounter] = useState(0)
    

    const revArr = reviewData.map(rev => {
        
        return (
        <div className="reviewContainer">
            <div className="reviewPoster">
                <img src={userPic} alt="user portrait"  className="userPortrait"/> 
                
                <h4>{rev.name}</h4>
            </div>
            
            <div className="reviewComment">
                <p>{rev.comment}</p>
                <p>Rating: {rev.rating}/5</p>
            </div>
        </div>
        )
        
        
    })
    

    useEffect(() => {
        let interval = setInterval(() => {
            if(counter<revArr.length){
                setCounter(counter => counter+1)
            }
            else{
                setCounter(0)
            }        
        }, 3000); 
        return () => {
            clearInterval(interval)
        }
        
        
    })

    
    
    return (
        revArr[counter] ? revArr[counter] : setCounter(0) 
    )
}

// Make it slide left all sleek like 