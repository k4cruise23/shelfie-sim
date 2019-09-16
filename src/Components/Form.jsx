import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            item: '',
            price: 0,
            img: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    cancelButton= () => {
        this.setState({
            item: '',
            price: '',
            img: ''
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props.inventory) {
            
        }
      }
    


    render(){
        return(
            <div className='Form' >
                <div className="inputs">
                    <h3>Image url: </h3>
                    <input type="text" name='image' onChange={this.handleChange} />
                    <h3>Product Name: </h3>
                    <input type="text" name='item' onChange={this.handleChange} />
                    <h3>Price: </h3>
                    <input type="text" name='price' onChange={this.handleChange} />
                </div>
                <div className="buttons">
                    <button onClick={() => this.cancelButton()} >Cancel</button>
                    <button onClick={() => this.props.addFn(this.state)} >Add to Inventory</button>
                </div>
            </div>
        )
    }
}