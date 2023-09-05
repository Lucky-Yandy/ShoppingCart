import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {Container} from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart.js';
import Store from './components/Store/Store.js';
import Navbar from './components/Navbar/Navbar.js';
import storeItems from './data/items.json';

function App() {  
   let storedItemQuantity = localStorage.getItem('itemQuantity');
   let storedCartQuantity = localStorage.getItem('cartQuantity');
   
   const[cart,setCart]=useState([]);
   const[itemQuantity,setItemQuantity]=useState(storedItemQuantity); 
   const[cartQuantity,setCartQuantity]=useState(storedCartQuantity);
   const[isOpen, setIsOpen]=useState(false);
  
   
   
   
    
    
   function addToCard (id){ 
    
    setCart(newCart => {
      if(newCart.find(item =>item.id ===id)?.quantity==null){
         return [...newCart,{id,quantity:1}]        
      }else{
           return newCart.map(item =>{
              if (item.id ===id){
                return{...item, quantity:item.quantity+1}
                   }else{
                      return item
       }
      
        })
      }
      
     });
     

 }
    
    function decreaseCartQuantity (id){ 
        setCart(newCart => {
         if(newCart.find(item =>item.id ===id)?.quantity===1){
          return newCart.filter(item =>item.id !==id)         
         }else{
		 return newCart.map(item =>{
		   if (item.id ===id){
		     return{...item, quantity:item.quantity-1}
		   }else{
		     return item
		   }
         
         })
         }
        
        });
         console.log(cart);
    
   }
   
 
  
   function removeItem(id){
     setCart(newCart =>{
              return newCart.filter(cartItem => cartItem.id !==id)
     })
     
  }
  
   
   const closeCart= () => setIsOpen(false);
   const openCart= () => setIsOpen(true);
   
   
   
   return (
   
    <div>
      <Navbar  
               storeItems={storeItems}
                closeCart={closeCart}
                openCart={openCart}
                cart={cart}
                
               />
      <Container className="mb-4">
       
          <Store 
                  storeItems={storeItems}
                  cart={cart}
                  
                  increaseGotClicked={addToCard}
                  decreaseCartQuantity={decreaseCartQuantity} 
                  removeItem={removeItem} />
           <Cart 
                  storeItems={storeItems}
                  
                  cart={cart}
                  isOpen={isOpen}
                  closeCart={closeCart}
                  removeItem={removeItem} />
       
      </Container>
    </div>
  );
}

export default App;





 
           
	    
	    
	    
	    
	    
	    
	    
	
       
       
       
        
