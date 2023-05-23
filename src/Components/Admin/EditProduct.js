import React, { Component } from 'react'
import axios from 'axios'

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
        this.ChangeCategory = this.ChangeCategory.bind(this)
        this.ChangeISPopular = this.ChangeISPopular.bind(this)
        this.Editproduct = this.Editproduct.bind(this)
    }
    render() {
        return (
            <div className='full-item'>
                <div>
                    <h3>Edit Product</h3>
                    <div className='add-product'>
                        <img src={this.state.img}></img>
                        <input type='file' onChange={(e)=> {
                            const data = new FormData()
                            data.append('file',e.target.files[0])
                             axios.post(`https://localhost:7031/api/AWS/upload-file-to-aws`,data)
                                .then(res => {
                                    this.setState({img: `https://ishopbucket.s3.eu-west-2.amazonaws.com/${e.target.files[0].name}`})
                                })
                        }} />
                        <input type='text' placeholder='Title...' value={this.state.title} onChange={(e)=> this.setState({title:e.target.value})}></input>
                        <input type='text' placeholder='Model...' value={this.state.model} onChange={(e)=> this.setState({model:e.target.value})}></input>
                        <input min={0} type='number' placeholder='Price...' value={this.state.price} onChange={(e)=> this.setState({price:e.target.value})}></input>
                        <select onChange={(e)=>{
                            this.ChangeCategory(e.target.value)
                        }}>
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
                        <input type='text' placeholder='Description...' value={this.state.desc} onChange={(e)=> this.setState({desc:e.target.value})}></input>
                        <input min={0} type='number' placeholder='Count Product...' value={this.state.countProduct} onChange={(e)=> this.setState({countProduct:e.target.value})}></input>
                        {this.state.isPopular == 1 && (
                            <select onChange={(e)=>{this.ChangeISPopular(e.target.value)}}>
                                <option selected>True</option>
                                <option>False</option>
                            </select>
                        )}
                        {this.state.isPopular == 0 && (
                            <select onChange={(e)=>{this.ChangeISPopular(e.target.value)}}>
                                <option>True</option>
                                <option selected>False</option>
                            </select>
                        )}
                    </div>
                    <div style={{ width: 100, borderRadius: 10, background: 'green' }} className='addToBucket' onClick={()=>{this.Editproduct()}}>Save</div>
                    <div style={{ width: 100, borderRadius: 10, marginRight: '20%' }} className='addToBucket' onClick={() => this.props.isShow()} >Close</div>
                </div>
            </div>
        )
    }
    ChangeCategory(title){
        for (const iterator of this.props.dataCategory) {
            if(iterator.title === title){
                this.setState({idCat: iterator.id})
                console.log(title);
            }
        }
    }
    ChangeISPopular(text){
        if(text === "True"){
            this.setState({isPopular: 1})
        }
        else if( text === "False"){
            this.setState({isPopular: 0})
        }
    }
    async Editproduct(){
        await axios.post(`https://localhost:7031/api/ControllerClass/update-product`, {
            "id": this.state.id,
            "title": `${this.state.title}`,
            "model":`${this.state.model}`,
            "price":this.state.price,
            "img":`${this.state.img}`,
            "idCategory":this.state.idCat,
            "description":`${this.state.desc}`,
            "count":this.state.countProduct,
            "isPopular":this.state.isPopular
            })
            .then(res => {
        })
        this.props.updateProduct(this.state.id,this.state.img,this.state.title,this.state.model,this.state.price,this.state.idCat,this.state.desc,this.state.countProduct,this.state.isPopular)
        this.props.getProducts()
    }
}
