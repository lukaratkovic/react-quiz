import React from "react";
import './Result.css';
import Gryffindor from "../../assets/gryffindor.webp"
import Ravenclaw from "../../assets/ravenclaw.webp"
import Hufflepuff from "../../assets/hufflepuff.webp"
import Slytherin from "../../assets/slytherin.webp"

const Result = (props) => {
    const result = [
        {
            "houseName": "Gryffindor",
            "totalPoints": props.points[0],
            "image": Gryffindor
        },
        {
            "houseName": "Ravenclaw",
            "totalPoints": props.points[1],
            "image": Ravenclaw
        },{
            "houseName": "Hufflepuff",
            "totalPoints": props.points[2],
            "image": Hufflepuff
        },{
            "houseName": "Slytherin",
            "totalPoints": props.points[3],
            "image": Slytherin
        }
    ];

    console.log(result);

    let finalHouse = result[0];
    for(let i=1; i<result.length; i++){
        if(result[i].totalPoints > finalHouse.totalPoints){
            finalHouse = result[i];
        }
    }
    

    return (
        <>
            <h1>Your house is... <span id={finalHouse.houseName}>{finalHouse.houseName}</span></h1>
            <img src={finalHouse.image}/>
            <button onClick={props.restart}>Try again</button>
        </>
    )
}

export default Result;