import React, { useContext } from 'react'
import { primaryContext } from '../../context/PrimaryContext'
import Card from '../Card'

const Cart = () => {
    const {cart, products } = useContext(primaryContext)

    // cartItem = {productId: 6, howmany: 3}
    let arrayOfCards = cart.map((cartItem) => {
        let correctProduct = products.find((prod) => {
            if (prod.id === cartItem.productId) {
                return true
            } else {
                return false
            }
        })
        return <Card key={correctProduct.title} productData={correctProduct} howMany={cartItem.howMany}/>
    })  
  return (
    <div>
        {/* map through the cart, making a CARD for each product in the cart */}
        {arrayOfCards}
    </div>
  )
}

export default Cart