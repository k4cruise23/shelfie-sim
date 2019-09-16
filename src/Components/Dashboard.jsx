import React, {Component} from 'react'
import Product from './Product'

export default class Dashboard extends Component {
constructor(props){
    super(props)
}
    render(){
        // console.log(this.props.inventory)
        console.log(this.props.id)
        return (
            <div>
            {this.props.inventory.length ? this.props.inventory.map(element => {
        return (
          <div key={element.product_id} >
            <h3>{element.product_name}</h3>
            <h3>{element.product_price}</h3>
            <img src={element.image_url} alt={`img of ${element.product_name}`}/>
            <button className="delete" onClick={() => this.props.deleteFn(element.product_id)} >Delete</button>
            <button>Edit</button>
          </div>
        )
      }) : null
    }
                <Product />
            </div>
        )
    }
}