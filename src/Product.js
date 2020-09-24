import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import { useStateValue } from './StateProvider';


function Product({id,title,image,price,rating}) {

    const [state,dispatch] = useStateValue();

    const addToBasket = ()=>{
        //dispatch the item into data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }

    return (
        <div className="product" >
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price" >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon style={{color:yellow[500]}} />
                    ))}
                </div>
            </div>  
            <img src={image} alt="Book" />
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product
