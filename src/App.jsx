import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react'
import Cart from './config/redux/components/cart';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeItem } from './config/redux/reducers/cartSlice';






const App = () => {

  const [products, setProducts] = useState(null)


  //selector
  const selector = useSelector(state => state.cart.cartItems);
  console.log(selector);

  // dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res.products)
      })
      .catch(err => console.log(err))
  }, [])

  const addToCart = (item) => {
    dispatch(addCartItem({
      item 
    }))
     
   
    // const deletCart= (index) => {
    //   dispatch(removeItem({
    //     index
    //   }))
    

  }

  return (
    <>
     <Cart />
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        {products ? products.map((item) => {
          return <div style={{
            border: "1px solid black",
            borderRadius: "20px",
            padding: "20px",
            margin: "10px"
          }} key={item.id}>
            <img width="200" src={item.thumbnail} alt="productImg" />
            <h2>{item.title.slice(0, 10) + "..."}</h2>
            <h1>{item.price}</h1>
            <div className='d-flex justify-content-space-around'>
            <button className="bg-primary text-white " onClick={() => addToCart(item)}>add To cart</button>
            <button className="bg-danger text-white gap-2" onClick={() => deletCart(index)}>Remove cart</button>

            </div>

          </div>
        }) : <p>Item not found</p>}
      </div>
    </>
  )
}

export default App