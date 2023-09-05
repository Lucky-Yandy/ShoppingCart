import React, { useState, useEffect } from 'react';
import {Row,Offcanvas, Stack,Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import{formatCurrency} from '../../utilities/formatCurrency';
//import CartItem from './CartItem.js';
import storeItems from '../../data/items.json';
function CartItem (props) {

  const item = props.storeItems.find (i => i.id ===props.id);
  if (item == null) return null;
  
  
  
 return (
    <div>
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.image} style={{ width: "150px", height: "75px", objectFit: "cover" }} />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            { props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0 > 1 && (
              <span className="text-muted" style={{ fontSize: "4px" }}>
                x{props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".65rem" }}>
            {formatCurrency(item.price*(props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0))}
          </div>
        </div>
       
        <button variant="outline-light" style={{backgroundColor: "SteelBlue"}} size="sm" onClick={() => props.removeItem(item.id)}>
         &times;
        </button>
      </Stack>
    </div>
  );
}



export default CartItem;

    
