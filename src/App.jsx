import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'

class App extends Component{
  constructor(){
    super()

    this.state = {

    }
  }


  render(){
    return(
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
      </div>
    )
  }
}

export default App;
