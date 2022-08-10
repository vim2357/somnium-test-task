import React, {useState} from "react";
import List from "../../data/List";
import './Content.css'
import { faSearch as Icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Content = ({ bookItem, handleAddItem}) => {
    let {bookItems} = List
    let [searchTerm, setSearchTerm] = useState("")
    return (
        <>
        <div className="search-box">
            
                <input type="text" className="search-input" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e)=>{
                    setSearchTerm(e.target.value)
                }}
                />
                <button className="search-button"><FontAwesomeIcon icon={Icon} className="fa"/></button>
                
                
            </div>  
        <div className="books">
            
            {bookItems.filter((value)=> {
                if (searchTerm == "") {
                    return value
                } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return value
                }
            })
            .map((value)=> {
                return (
                    <div className="card">
                    <div className="card__image-holder">
                        <img className="card__image" 
                        src={value.image} 
                        alt={value.title} />
                    </div>
                    <div className="card__info">
                        <p className="card__title">
                            {value.title}
                        </p>
                        <p className="card__author">
                            {value.author}
                        </p>
                        <p className="card__price">
                           {value.price}тг 
                        </p>
                    </div> 
                    <button className="card__add-button" onClick={() => handleAddItem(value)}>Add to Cart</button>
                    </div>
                    
                    
            )
                })}
                   
           

        
          
        </div>
        </>
    )
            } 

export default Content