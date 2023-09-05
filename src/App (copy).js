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
   const[cart,setCart]=useState([]);
   const[itemQuantity,setItemQuantity]=useState(); 
   const[cartQuantity,setCartQuantity]=useState(0);
   const[isOpen, setIsOpen]=useState(false);
  
   function getItemQuantity(id){
     return cart.find(item => item.id === id)?.quantity ||0;         
   }
   
    
   function addToCard (id){ 
      
      setCart(newCart => {
         if(newCart.find(item =>item.id ===id)==null){    
             return[...newCart,{id,quantity:1}]                               
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
      <Navbar  getItemQuantity={getItemQuantity}
               storeItems={storeItems}
                closeCart={closeCart}
                openCart={openCart}
               />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store 
                          storeItems={storeItems}
                          cart={cart}
                          getItemQuantity={getItemQuantity}
                          increaseGotClicked={addToCard}
                          decreaseCartQuantity={decreaseCartQuantity} 
                          removeItem={removeItem} />} />
          <Route path="/cart" element={<Cart 
                                     storeItems={storeItems}
                                     getItemQuantity={getItemQuantity}
                                      cart={cart}
                                      isOpen={isOpen}
                                      closeCart={closeCart}
                             removeItem={removeItem} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;





  /*  const newVal=totalQuantity+1;   
        setTotalQuantity(newVal);
        console.log(newVal);
        const newShoppingList=shoppingList.slice();
        const item = storeItems.find(item => item.id === id);
        newShoppingList.push(item);
        setShoppingList( newShoppingList);
        console.log(newShoppingList);
       const cartItems = cart.map((item,id) =>(
      
      
      
      <Col key={item.id}> 
            <div>{item.image}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <button onClick={() =>removeItem(id)}> remove</button>
            
          </Col>
   )) 
        
      /*   function closeCart(){
    setIsOpen(false);
   
   }
   function openCart(){
    setIsOpen(true);
   }
 *    
  /*function getItemQuantity(id){
    return(cart.find(item => item.id===id)?.quantity||0);
    
   }  
   
   
    function getItemQuantity(id) {
      const item = cart.find(item => item.id === id);
      if (item) {
         setItemQuantity(item.quantity);
         console.log(itemQuantity);
       } else {
          setItemQuantity(0);
    }
  }
       
       
       
      
   /* const getItemAndCartQuantity= (id) {
   
       const newItemQuantity = cart.find(item =>item.id===id)?.quantity ||0;
        setItemQuantity(newItemQuantity);
        console.log("the item quantity is",itemQuantity);
          
      for (let item of cart) {
          if (item.id ===id){
             const newItemQuantity=item.quantity;
             setItemQuantity(newItemQuantity);
             console.log("the item quantity is",itemQuantity); 
             const newCartQuantity = cartQuantity + itemQuantity;
             setCartQuantity(newCartQuantity);
             console.log("the cart quantity is",itemQuantity); 
           }  
       }
    }
  
	   useEffect(() => {
	      console.log(cart);
	    }, [cart]); 
	    
	    
	    
	const data = [ 
    {
        name: "Foobar",
        id: 1,
    },
    {
        name: "Other thing",
        id: 2,
    },
];

function App() {
    const [ quantityObject, setQuantityObject ] = useState({ });

    function addItem(id) {
        const newQuantityObject = Object.assign({}, quantityObject);
        if (!(id in newQuantityObject)) {
            newQuantityObject[id] = 0; 
        } 
        newQuantityObject[id]++; // Add one to the quantity
        setQuantityObject(newQuantityObject); // Update state
    }

    return (
        <div>
            {
                data.map(item => (
                    <p>
                        { item.name } - 
                        { quantityOBject[item.id] || 0 } 
                        <button onClick={() => addItem(item.id)}>ADD</button>
                    </p>
                ))
            }
        </div>
    );
}    
	    
	    
	  /*const newVal=cartQuantity+1;   
        setCartQuantity(newVal);
        console.log(newVal);
        
        const newShoppingList=cart.slice();
        const item = storeItems.find(item => item.id === id);
        newShoppingList.push(item);
        setCart( newShoppingList);
        console.log(newShoppingList); 
        console.log("get the cart list",cart);*/
        
           
	    
	    
	    
	    
	    
	    
	    
	
       
       
       
        
