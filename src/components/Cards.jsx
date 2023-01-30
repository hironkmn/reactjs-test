import React from "react";
import Card from "./Card";

let res = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => console.log(json))
let itemList = [];
res.forEach((item, index) => {
    itemList.push(<li key={item}><Card /></li>)
})


const Cards = (props) => {
    return (
        <div id='countries'>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}
export default Cards;