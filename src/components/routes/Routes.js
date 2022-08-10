import React from "react"
import { Routes, Route } from 'react-router-dom'
import Books from '../front/books/Books'
import Cart from "../front/cart/Cart" 
import Content from "../front/content/Content"
const Routess = ({ bookItems, cartItems, handleAddItem, handleRemoveItem, handleCartClear}) => {
    return (
    <Routes>
        <Route path="/" element={ <Content
        handleAddItem={ handleAddItem }/>} />
        <Route path="/cart" element={ <Cart 
        cartItems={ cartItems } 
        handleAddItem={ handleAddItem } 
        handleRemoveItem= { handleRemoveItem} 
        handleCartClear={ handleCartClear } /> } />
    </Routes>
    )
}
export default Routess