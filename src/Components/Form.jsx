import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../App.css'

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0, 
            img: 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1414779644.jpg', 
            editingProduct: false 
        }
    }

    componentDidUpdate(prevProps) {
        const id = this.props.match.params.id; 
        const prevId = prevProps.match.params.id; 
        if(id !== prevId) {
            this.setState({
            name: '',
            price: 0, 
            img: 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1414779644.jpg'  
        })
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params; 
        if(id != null || undefined) {
            this.getProduct(); 
            this.handleEditToggle();
        }
    }
    
    getProduct = () => {
        const {id} = this.props.match.params; 
        axios.get(`/api/product/${id}`)
            .then(response => {
                const { name, price, img} = response.data[0]; 
                this.setState({
                    name, 
                    price,
                    img
                })
            })
    }

    handleEditToggle = () => {
        this.setState({
            editingProduct: true
        })
      }


    // handleName = (value) => {
    //     this.setState({
    //         name: value 
    //     })
    // }

    // handlePrice = (value) => {
    //     this.setState({
    //         price: value 
    //     })
    // }

    // handleImageUrl = (value) => {
    //     this.setState({
    //         img: value
    //     })
    // }

    handleChange = (statename, e) => {
        this.setState({[statename]: e})
    }

    cancelProduct = () => {
        this.setState({
            name: '',
            price: 0, 
            img: 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1414779644.jpg',
            selectedId: null,
        })
    }

    createProduct = () => {
        axios.post('/api/product', {
            name: this.state.name, 
            price: this.state.price, 
            img: this.state.img
        })
    }

    updateProduct = (id) => {
        axios.put(`/api/products/${id}`, {
            name: this.state.name, 
            price: this.state.price, 
            img: this.state.img
        })
    }

    render() {
        const { name, price, img } = this.state; 
        const { id } = this.props.match.params; 
        return (
            <div className='form-flex-div'>
                {!this.state.editingProduct
                ?
                (<div className='form-container'>
                    <div className='input-container'>
                        <img src={img} alt="" />
                        <label>Image URL:</label>
                        <input onChange={e => this.handleChange("img", e.target.value)} ></input>
                        <label>Product Name:</label>
                        <input onChange={e => this.handleChange('name', e.target.value)}></input>
                        <label>Price:</label>
                        <input onChange={e => this.handleChange('price', e.target.value)} value={this.state.price}></input>
                    </div>
                    <div className="form-buttons-container">
                        <button onClick={this.cancelProduct}>Cancel</button>
                        <Link to='/'><button onClick={this.createProduct}>Add to Inventory</button></Link>
                    </div>
                </div>
                )
                :
                (
                <div className='form-container'>
                    <div className='input-container'>
                        <img src={img} alt="" />
                        <label>Image URL:</label>
                        <input onChange={e => this.handleChange('img', e.target.value)} name='img'></input>
                        <label>Product Name:</label>
                        <input onChange={e => this.handleChange('name', e.target.value)} name='name'></input>
                        <label>Price:</label>
                        <input onChange={e => this.handleChange('price', e.target.value)} name='price'></input>
                    </div>
                    <div className="form-buttons-container">
                        <Link to='/'><button>Cancel</button></Link>
                        <Link to='/'><button onClick={() => this.updateProduct(id)}>Save Changes</button></Link>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}