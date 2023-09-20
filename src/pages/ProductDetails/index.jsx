import React, { useContext } from 'react'
import { primaryContext } from '../../context/PrimaryContext'
// import { useHistory, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {


  //   QUERIES //////////////////////////////
    // /single_product/?clickedProductId=5
    // const params = new URLSearchParams(window.location.search);
    // const clickedProductId = params.get('clickedProductId');
    //   // FROM URL    5
    // console.log(clickedProductId);
//////////////////////////////////////


    // PARAMS ////////////////////////////
    // /single_product/18
      const { clickedId } = useParams();
      let clickedProductId = clickedId;
//////////////////////////////////////////////////


    const  {  products   } = useContext(primaryContext);




  console.log(products);
    let correctProduct = products.find((product) => {
        console.log(product.id, clickedProductId );
        // +"7" turns it into 7  (the number data type)
        if (product.id === +clickedProductId){
          return true;
        } else {
          return false;
        }
    })

    // the object  OR undefined
   
    console.log(correctProduct);


  return (
    <div>
        <h1>Product Details Page</h1>
        {correctProduct ? (
          <div>
            <h3>{correctProduct.title}</h3>
            <p>{correctProduct.price}</p>
          </div>
        ) : <div>loading...</div>

      }
    </div>
    
  )
}

export default ProductDetails