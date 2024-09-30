import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const selector =  useSelector (state => state.cart.cartItems);
  console.log(selector);
  return (
   <>
   <h1>Product App</h1>
   <h2>{selector}</h2>
   </>
  )
}

export default Cart