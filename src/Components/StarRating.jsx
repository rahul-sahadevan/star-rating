import React, { useState } from "react";
import { FaStar } from "react-icons/fa";



const StarRating = ({count})=>{

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

    function handleHover(index){
        console.log(index)
        setHover(index)

    }

    function handleLeave(){
        setHover(rating)

    }

    function handleRating(index){
        setRating(index)
        console.log(index)

    }


    return (
        <div className="star">
            {
                [...Array(count)].map((_,index)=>{
                    index += 1
                    
                    return < FaStar
                        key={index} 
                        className={index <= (hover || rating) ? 'active' : "inactive"} 
                        size={40}

                        onClick={()=>handleRating(index)}
                        onMouseEnter={()=>handleHover(index)}
                        onMouseLeave={()=>handleLeave(index)}
                     />
                })
            }

        </div>
    )
}

export default StarRating