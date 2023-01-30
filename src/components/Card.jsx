import React from "react";
import ReactPlaceholder from 'react-placeholder';
import "../../../node_modules/react-placeholder/lib/reactPlaceholder.css"

const Card = (props) => {
    return(
        <div id="card" key={props.key}>
            <img src="" alt="test" />
                <h3>{props.name}</h3>
                <p>{props.username}</p>
                <a href={"https://www.google.pl/maps/@" + props.lat +","+ props.lont +"," + '5z'}></a>

        </div>
    )
}

export default Card;