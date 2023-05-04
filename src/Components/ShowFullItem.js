import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.model}</p>
                    <b>{this.props.item.price}$</b>
                    <p>{this.props.item.description}</p>
                    <div className='addToBucket' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem