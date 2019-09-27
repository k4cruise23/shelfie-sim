import React, {Component} from 'react'
// import Product from './Product'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super(); 
        
        this.state = {
            inventory: [], 
        }
    }

    componentDidMount() {
        this.getInventory(); 
      };
      
    getInventory = () => {
        axios.get('/api/inventory')
        .then(response => {
          this.setState({
            inventory: response.data 
          })
        })
      };
      
    deleteProduct = (id) => {
        console.log(id)
        axios.delete(`/api/products/${id}`)
            .then(() => {
                this.getInventory();
            })
            .catch(error => {console.log('Error in Dashboard:', error)})
    }
    render() {
        console.log(this.state.inventory)
        const { inventory } = this.state; 
        const mappedInventory = inventory.map((el, i) => (
                // <Product key={index} product={product} deleteProduct={this.deleteProduct} 
                // handleEditToggle={this.props.handleEditToggle}/> 
                <div className='outer' key={el.product_id}>
                    <div className="image-container">
                        <img src={el.image_url} alt=""/>
                    </div>
                    <div className="name-price">
                        <span>{el.product_name}</span>
                        <span>{el.product_price}</span>
                    </div>
                    <div className="delete-edit">
                        <Link to={`/edit/${el.product_id}`} ><button>Edit</button></Link>
                        <button onClick={() => this.deleteProduct(el.product_id)} >Delete</button>
                    </div>
                </div>
            )
        )
        return (
            <div className='products-flex-div'>
                    {mappedInventory}
            </div>
        )
    }
}