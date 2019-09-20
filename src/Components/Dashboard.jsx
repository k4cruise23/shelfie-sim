import React, {Component} from 'react'
import Form from './Form'
import axios from 'axios'

export default class Dashboard extends Component {
constructor(props){
    super(props)

    this.state={
      inventory: []
    }

    this.addProduct = this.addProduct.bind(this)
}


componentDidMount(){
  this.getProducts()
}

getProducts(){
  axios.get('/api/inventory').then(res => {
    this.setState({inventory: res.data})
  })
}

componentDidUpdate(prevProps, prevState){
  if(prevState !== this.state){
      this.getProducts()
  }
}

addProduct(body){
  axios.post('/api/inventory', body).then(res => {
    this.setState({inventory: res.data})
  })
}

deleteProduct(id) {
  // console.log(id)
  axios.delete(`/api/inventory/${id}`).then(res => {
    // console.log(res.data)
    this.setState({inventory: res.data})
  })
}

updateProduct(id){
  {}

}



    render(){
        // console.log(this.state.inventory)
        // console.log(this.state.id)
        return (
            <div>
            {this.state.inventory.length ? this.state.inventory.map(element => {
        return (
          <div key={element.product_id} >
            <h3>{element.product_name}</h3>
            <h3>{element.product_price}</h3>
            <img src={element.image_url} alt={`img of ${element.product_name}`}/>
            <button className="delete" onClick={() => this.deleteProduct(element.product_id)} >Delete</button>
            <button>Edit</button>
          </div>
        )
      }) : null
    }
                <Form 
                addFn={this.addProduct}/>
            </div>
        )
    }
}