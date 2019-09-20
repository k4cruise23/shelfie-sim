import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'
import route from '../src/route'

class App extends Component{
  constructor(){
    super()

    this.state = {
      inventory: [
        
      ]
    }


    // this.addProduct = this.addProduct.bind(this)
    // this.deleteProduct = this.deleteProduct.bind(this)
  }

  // componentDidMount(){
  //   this.getProducts()
  // }

  // getProducts(){
  //   axios.get('/api/inventory').then(res => {
  //     this.setState({inventory: res.data})
  //   })
  // }

  // // componentDidUpdate(prevProps, prevState){
  // //   if(prevState !== this.state){
  // //       this.getProducts()
  // //   }
  // // }

  // addProduct(body){
  //   axios.post('/api/inventory', body).then(res => {
  //     this.setState({inventory: res.data})
  //   })
  // }

  // deleteProduct(id) {
  //   // console.log(id)
  //   axios.delete(`/api/inventory/${id}`).then(res => {
  //     // console.log(res.data)
  //     this.setState({inventory: res.data})
  //   })
  // }




  render(){

    return(
      <div className="App">
        {route}
        <Header />
        <Form 
        addFn={this.addProduct}/>
        {this.state.inventory ?  
        <Dashboard 
        inventory={this.state.inventory}
        // deleteFn={this.deleteProduct}
         />
        : <h3>loading....</h3> }
      </div>
    )
  }
}

export default App;
