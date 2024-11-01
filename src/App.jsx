import Cart from "./Cart";
import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg  from "./Veg";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PurchaseHistory from"./PurchaseHistory";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import { useSelector } from "react-redux";
import { FaHome, FaLeaf, FaDrumstickBite, FaShoppingCart, FaInfoCircle, FaPhone, FaHistory } from 'react-icons/fa';
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {
  const cartItems = useSelector((state) => state.cart);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
    <GoogleOAuthProvider clientId="171133159806-f9uiuao402o99mqfulq3mq21tebgmvjc.apps.googleusercontent.com">
    <GoogleLoginComponent/>
    </GoogleOAuthProvider>

      <BrowserRouter>
        <nav>
        <Link to='/home'><FaHome /> Home</Link>
      <Link to='/veg'><FaLeaf /> Veg-Items</Link>
      <Link to='/nonveg'><FaDrumstickBite /> NonVeg-Items</Link>
      <Link to='/cart'><FaShoppingCart /> Cart ({totalItems})</Link>
      <Link to='/aboutus'><FaInfoCircle /> About Us</Link>
      <Link to='/contactus'><FaPhone /> Contact Us</Link>
      <Link to='/purchasehistory'><FaHistory /> Purchase History</Link>
        </nav>
        
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/veg' element={<Veg />} />
          <Route path='/nonveg' element={<NonVeg />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/aboutus' element={< AboutUs/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/purchasehistory' element={<PurchaseHistory/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;


/*import React, { useRef } from 'react';

function App() {
    // Create references to the input fields
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);

    // Function to perform addition
    const handleAddition = () => {
        const num1 = parseInt(num1Ref.current.value);
        const num2 = parseInt(num2Ref.current.value);
        resultRef.current.value = num1 + num2;
    };

    // Function to perform subtraction
    const handleSubtraction = () => {
        const num1 = parseInt(num1Ref.current.value);
        const num2 = parseInt(num2Ref.current.value);
        resultRef.current.value = num1 - num2;
    };

    // Function to perform multiplication
    const handleMultiplication = () => {
        const num1 = parseInt(num1Ref.current.value);
        const num2 = parseInt(num2Ref.current.value);
        resultRef.current.value = num1 * num2;
    };
    const handleDivision = () => {
        const num1 = parseInt(num1Ref.current.value);
        const num2 = parseInt(num2Ref.current.value);
        resultRef.current.value = num1 / num2;
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input ref={num1Ref} type="number" placeholder="Enter first number" />
            <input ref={num2Ref} type="number" placeholder="Enter second number" />
            <br />
            <button onClick={handleAddition}>Add</button>
            <button onClick={handleSubtraction}>Subtract</button>
            <button onClick={handleMultiplication}>Multiply</button>
            <button onClick={handleDivision}>Division</button>
            <br />
            <input ref={resultRef} type="text" placeholder="Result" readOnly />
        </div>
    );
}

export default App;*/
