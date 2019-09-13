import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'

class App extends Component{
  constructor(){
    super()

    this.state = {
      inventory: {
        // product1: {
        //   name: 'shoe',
        //   price: 45,
        //   img: '?',
        // },
        // product2: {
        //   name: 'pants',
        //   price: 7,
        //   img: '?'
        // },
        // product3: {
        //   name: 'socks',
        //   price: 673,
        //   img: '?'
        // }
      }
    }
    this.addProduct = this.addProduct.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }

  addProduct(body){
    axios.post('/api/inventory', body).then(res => {
      this.setState({inventory: res.data})
    })
  }

  deleteProduct(id) {
    axios.delete(`/api/menu/${id}`).then(res => {
      this.setState({inventory: res.data})
    })
  }


  render(){
    return(
      <div className="App">
        <Header />
        <Form 
        addFn={this.addProduct}/>
        <Dashboard 
         />
      </div>
    )
  }
}

export default App;
