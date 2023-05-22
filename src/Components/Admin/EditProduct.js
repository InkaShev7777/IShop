import React, { Component } from 'react'

export default class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            img: this.props.img,
            title: this.props.title,
            model: this.props.model,
            price: this.props.price,
            idCat: this.props.idCat,
            desc: this.props.desc,
            countProduct: this.props.countProduct,
            isPopular: this.props.isPopular
        }
    }
    render() {
        return (
            <div className='full-item'>
                <div>
                    <h3>Edit Product</h3>
                    <div className='add-product'>
                        <img src={this.state.img}></img>
                        <input type='file' />
                        <input type='text' placeholder='Title...' value={this.state.title} onChange={(e)=> this.setState({title:e.target.value})}></input>
                        <input type='text' placeholder='Model...' value={this.state.model}></input>
                        <input min={0} type='number' placeholder='Price...' value={this.state.price}></input>
                        <select>
                            {this.props.dataCategory.map((el) => {
                                if (el.id != 1) {
                                    {
                                        if (el.id === this.state.idCat) {
                                            return (<option selected>{el.title}</option>)
                                        }
                                    }
                                    return (<option>{el.title}</option>)
                                }
                            }
                            )}
                        </select>
                        <input type='text' placeholder='Description...' value={this.state.desc}></input>
                        <input min={0} type='number' placeholder='Count Product...' value={this.state.countProduct}></input>
                        {this.state.isPopular == 1 && (
                            <select>
                                <option selected>True</option>
                                <option>False</option>
                            </select>
                        )}
                        {this.state.isPopular == 0 && (
                            <select>
                                <option>True</option>
                                <option selected>False</option>
                            </select>
                        )}
                    </div>
                    <div style={{ width: 100, borderRadius: 10, background: 'green' }} className='addToBucket'>Save</div>
                    <div style={{ width: 100, borderRadius: 10, marginRight: '20%' }} className='addToBucket' onClick={() => this.props.isShow()} >Close</div>
                </div>
            </div>
        )
    }
}
