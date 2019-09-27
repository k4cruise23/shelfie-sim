import React from 'react';
import {Link} from 'react-router-dom';

//I ended up rendering all of this in the dashboard component so this stuff is kinda useless now.
//oh well.
const Product = (props) => {
    const {name, price, img} = props.product; 
    const id = props.product.id; 
    return (
        <div className='product-container'>
            <img src={img} alt='product'/>
            <div className='product-info-buttons'>
                <div className='info-container'>
                    <span>{name}</span>
                    <span>${price}</span>
                </div>
                <div className='button-container'>
                    <button onClick={() => props.deleteProduct(id)}>Delete</button>
                    <Link to={`/edit/${id}`}>
                    <button>Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product; 