import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Nav from './Nav'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
export default class ProductsAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:-1,
            img:'',
            title:'',
            model:'',
            price:0,
            idCat:0,
            desc:'',
            countProduct:0,
            popular:0,
            columns: [
                {
                    name: 'ID',
                    selector: row => row.id
                },
                {
                    name: 'Image',
                    selector: (row) => <img width={50} height={50} src={row.img}></img>
                },
                {
                    name: 'Title',
                    selector: row => row.title
                },
                {
                    name: 'Model',
                    selector: row => row.model
                },
                {
                    name: 'Price',
                    selector: row => row.price
                },
                {
                    name: 'ID Category',
                    selector: row => <div>  <select disabled>{
                        this.props.dataCategory.map((el) => {if(el.id == row.idCategory ){
                            return (<option selected>{el.title}</option>)
                        }
                        else if( el.id != 1){
                            return (<option>{el.title}</option>)
                        }
                    })
                    }
                    </select></div>
                },
                {
                    name: 'Description',
                    width: '200px',
                    selector: row => row.description
                },
                {
                    name: 'Count Product',
                    selector: row => row.count
                },
                {
                    name: 'Popular',
                    selector: row =>
                        <div>
                            {row.isPopular == 1 &&
                                <select disabled>
                                    <option selected>True</option>
                                    <option>False</option>
                                </select>
                            }
                            {row.isPopular == 0 &&
                                <select disabled>
                                    <option>True</option>
                                    <option selected>False</option>
                                </select>
                            }
                        </div>
                },
                {
                    name: "Action",
                    width: '200px',
                    cell: row => (
                        <div>
                            <button className='btn btn-primary' onClick={()=> {
                                this.isEdit()
                                this.setState({id:row.id})
                                this.setState({img:row.img})
                                this.setState({title:row.title})
                                this.setState({model:row.model})
                                this.setState({price:row.price})
                                this.setState({idCat:row.idCategory})
                                this.setState({desc:row.description})
                                this.setState({countProduct:row.count})
                                this.setState({popular:row.isPopular})

                            }} >Edit</button>
                            <button style={{ marginLeft: 10 }} className='btn btn-danger' onClick={()=> this.DeleteById(row.id)}>Delete</button>
                        </div>
                    )
                }
            ],
            records: this.props.data,
            addProduct:false,
            isEdit:false
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.DeleteById = this.DeleteById.bind(this)
        this.isShow = this.isShow.bind(this)
        this.isEdit = this.isEdit.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }
    render() {
        return (
            <div className='px-3'>
                <Nav Toggle={this.props.Toggle} />
                <div className='container mt-5'>
                    <div className='text-end'>
                        <input style={{marginBottom:0}} className='inp-admin' type="text" placeholder='Enter query...' onChange={this.handleFilter}/>
                    </div>
                    <DataTable title='Products' columns={this.state.columns} data={this.state.records} fixedHeader pagination actions={<button onClick={()=>{this.isShow()}} className='btn btn-success'>Add</button>}></DataTable>
                    {this.state.addProduct && <AddProduct dataCategory={this.props.dataCategory}   isShow={this.isShow}/>}
                    {this.state.isEdit && <EditProduct updateProduct={this.updateProduct} getProducts={this.props.getProducts} id={this.state.id} img={this.state.img} title={this.state.title} model={this.state.model} price={this.state.price} idCat={this.state.idCat} desc={this.state.desc}countProduct={this.state.countProduct} isPopular={this.state.popular}  dataCategory={this.props.dataCategory} isShow={this.isEdit}/>}
                </div>
            </div>
        )
    }
    handleFilter(event){
        const newDate = this.props.data.filter(row => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase()) || row.model.toLowerCase().includes(event.target.value.toLowerCase())
        })
        this.setState({records: newDate})
    }
    DeleteById(id){
        const tempArr = this.state.records.filter((el)=>{return el.id != id})
        this.setState({records:tempArr})
    }
    isShow(){
        this.setState({addProduct: !this.state.addProduct})
    }
    isEdit(){
        this.setState({isEdit:!this.state.isEdit})
    }
    updateProduct = (id, img, title, model, price,idCat, description, count, isPopular) => {
        for(let i = 0; i< this.state.records.length; i ++){
          if(this.state.records[i].id === id){
            const mas = [...this.state.records]
            mas.splice(i,1,{id,img,title,model,price, idCat,description,count,isPopular})
            this.setState({records: mas})
          }
        }
    }
}
