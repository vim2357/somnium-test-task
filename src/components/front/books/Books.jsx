import React from "react";
import './Books.css'
import Content from "../content/Content";
const Books = ({ handleAddItem}) => {
    return (
       <Content handleAddItem={handleAddItem}/>
    )
}

export default Books