// imports
import { createContext, useState } from "react";

// create context 
export const primaryContext = createContext();



// create provider (add values)
const PrimaryProvider = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)

    // let exampleObject = {
    //     product: {},
    //     number: 3
    // }

    console.log(products);
    // return providerJSX
    return(
        <primaryContext.Provider value={{
            products,
            setProducts,
            cart,
            setCart
        }}>
            {props.children}
        </primaryContext.Provider>
    )
}


export default PrimaryProvider