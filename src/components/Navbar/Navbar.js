import React, { useState, useEffect } from 'react';
import {Container, Button,Nav,Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink}from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
function Navbar(props){
   

    const totalQuantity = props.storeItems.reduce((total, item) => {
        const quantity =  props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0;
        return total + quantity;
    }, 0);
    
    const{closeCart,openCart}=props
  
   return(
	
	 <NavbarBs sticky="top"  className="shadow-sm mb-3" style={{height:"120px", backgroundColor: "SteelBlue"}}>
	   <Container>
	    <Nav className="me-auto">
	     <Nav.Link to="/"  style={{fontSize: "35px",fontWeight: "bold", color: "white"}} as={NavLink}> Hi, Welcome to Yan's Store</Nav.Link>
	      
	    </Nav>
	     <Nav.Link to="/cart" as={NavLink}>
	       <Button  onClick={openCart}
	            style={{width:"3rem", height:"3rem",position:"relative"}}
	            variant="outline-light"
	            className="rounded-circle">
	          <FaShoppingCart/>
	          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center " style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom:"0",right:"0",transform:"translate(25%, 25%)",}}>{totalQuantity}</div>
	         </Button>
	       </Nav.Link>
	   </Container>
         </NavbarBs>
   );



}

export default Navbar;










/*<Nav.Link to="/buttom" as={NavLink}> Cart</Nav.Link>*/
