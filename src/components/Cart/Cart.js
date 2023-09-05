import React, { useState, useEffect } from 'react';
import {Row, Offcanvas,Stack,Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import{formatCurrency} from '../../utilities/formatCurrency';
import CartItem from './CartItem.js';

function  Cart(props) {
  
  const{isOpen,closeCart,openCart}= props
  return (
   <div>
      <Offcanvas  show={props.isOpen} onHide={closeCart} placement="end" >
         <Offcanvas.Header closeButton>
             <Offcanvas.Title>Cart</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
          <Stack gap={3}>
          {props.cart.map((item, index) =>(
            <CartItem key={index} {...item}  storeItems={props.storeItems}
                                             
                                              cart={props.cart}
                                              removeItem={props.removeItem} />
          ))}
          <div className="ms-auto  fw-bold fs-5">
           total{" "}
           {formatCurrency(props.cart.reduce((total, cartItem) => {
               const storeItem = props.storeItems.find(item => item.id === cartItem.id);
                return total + (storeItem?.price ||0 )* cartItem.quantity}, 0))}
   
          </div>
          
          </Stack>
           <Stack>
            <button variant="outline-light" style={{backgroundColor: "SteelBlue", marginTop: "20px"}} 
            size="sm">
          checkout
        </button>
            </Stack>
         </Offcanvas.Body>
      </Offcanvas>
   
   
   </div>
  );
}

export default Cart;

       
         
         
         
         
         
         
         
         
         
         
         
         
/* <div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {props.cartList.map((item, index) => (
          <Col key={index}>
            <div>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  height="200px"
                  style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-3">{item.name}</span>
                    <span className="ms-2 text-muted">
                      {formatCurrency(item.price)}
                    </span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>*/         
         
