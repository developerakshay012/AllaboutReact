import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductsItem.css';

const ProductsItem = (props) => {

//   const [title, setTitle] =  useState(props.title);
    // const [title,setTitle]  = useState(props.title)
    const[title,setTitle]   = useState(props.title)


//   function clickHandler() {
//     //title = "Popcorn";
//     setTitle("Peenut Butter");
//     console.log("button clicked");
//   }
  
    function clickHandle(){
        setTitle("Peenut butter")
        console.log("button clicked");
    }


  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      {/* <button onClick={clickHandle}>Add to Cart</button> */}

      <button onClick={clickHandle}>Add to Cart</button>
    </Card>
  );
}

export default ProductsItem;