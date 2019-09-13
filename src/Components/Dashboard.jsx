import React, {Component} from 'react'
import Product from './Product'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {

        }
    }


    render(){
        return (
            <div> Dashboard
                <Product />
            </div>
        )
    }
}