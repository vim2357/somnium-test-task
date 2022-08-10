import React from "react";
import './Cart.css'

const Cart = ({cartItems, handleAddItem, handleRemoveItem, handleCartClear}) => {
    const totalPrice = cartItems.reduce((price, item)=> price + item.quantity * item.price,0)
    return (
        <div className="cart-items">
            <div className="cart-items__header">
                Cart items
            </div>
            <div className="cart-items__clear">
                {cartItems.length>=1 && (
                    <button className="cart-items__clear-button"
                    onClick={handleCartClear}>
                        Clear Cart
                    </button>
                )}
            </div>
            {cartItems.length===0 && (<div className="cart-items__empty">No items added</div>)}
            <div>
                {cartItems.map((item)=>(
                    <div key={item.id} className="cart-items__list">
                        <img className="cart-items__image" src={item.image} />

                        <div className="cart-items__title">{item.title}</div>
                        
                        <div className="cart-items__func">
                            <button className="cart-items__add" onClick={()=> handleAddItem(item)}>
                            +
                            </button>
                            <button className="cart-items__remove" onClick={()=> handleRemoveItem(item)}>-</button>
                        </div>
                        <div className="cart-items__price">
                            {item.quantity} * {item.price}
                        </div>
                        
                        
                    </div>
                ))}
            </div>
            <div className="cart-items__price-name">
                <div className="cart-items__total-price">{totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart