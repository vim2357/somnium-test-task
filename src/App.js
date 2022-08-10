import { React, useState } from 'react';
import './App.css';
import List from './components/data/List';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/front/header/Header';
import Routess from './components/routes/Routes';
import Books from './components/front/books/Books';
import Content from './components/front/content/Content';

function App() {
  const { bookItems } = List;
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (book) => {
    const bookExistence = cartItems.find((item) => item.id === book.id);
    if (bookExistence) {
      setCartItems(
        cartItems.map((item) =>
          item.id === book.id ? { ...bookExistence, quantity: bookExistence.quantity + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (book) => {
    const bookExistence = cartItems.find((item) => item.id === book.id);
    if (bookExistence.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== book.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === book.id ? { ...bookExistence, quantity: bookExistence.quantity - 1 } : item,
        ),
      );
    }
  };

  const handleCartClear = () => {
    setCartItems([])
  }
  return (
    <>
      <Header />
      <Routess
        bookItems={bookItems}
        cartItems={cartItems}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        handleCartClear={handleCartClear}
      />
    </>
  );
}

export default App;
