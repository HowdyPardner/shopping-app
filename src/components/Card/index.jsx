import { primaryContext } from '../../context/PrimaryContext'
import './index.css'
import React, { useContext } from 'react'
const Card = ({productData}) => {
  const { cart, setCart } = useContext(primaryContext)
  const handleClick = () => {
    // setCart to everything that was in cart already, PLUS this item
  // check if this is already in the cart
  let indexInCart = cart.findIndex((itemInCart) => {
      // return boolean
      if (itemInCart.productId === productData.id) {
        return true;
      } else {
        return false;
      }
  });
  // indexInCart is the index OR -1
  const newCart = [...cart];
  // not in cart!
  if (indexInCart === -1) {
      newCart.push(
        { productId: productData.id, howMany: 1 }
        );
  } else {
      newCart[indexInCart].howMany++;
  }
  setCart(newCart);
  }
  return (
    <div className="card">
      <button> Remove from Cart</button>
        <button onClick={handleClick}>Add To Cart</button>
        <h3>{productData.title}</h3>
        <img src={productData.image} alt={productData.title} />
        <div>{productData.description}</div>
    </div>
  )
}
export default Card