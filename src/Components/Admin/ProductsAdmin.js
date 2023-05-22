import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Nav from './Nav'
export default class ProductsAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                            <button className='btn btn-primary' >Edit</button>
                            <button style={{ marginLeft: 10 }} className='btn btn-danger' onClick={()=> this.DeleteById(row.id)}>Delete</button>
                        </div>
                    )
                }
            ],
            records: this.props.data
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.DeleteById = this.DeleteById.bind(this)
    }
    render() {
        return (
            <div className='px-3'>
                <Nav Toggle={this.props.Toggle} />
                <div className='container mt-5'>
                    <div className='text-end'>
                        <input style={{marginBottom:0}} className='inp-admin' type="text" placeholder='Enter query...' onChange={this.handleFilter}/>
                    </div>
                    <DataTable title='Products' columns={this.state.columns} data={this.state.records} fixedHeader pagination actions={<button className='btn btn-success'>Add</button>}></DataTable>
                    {/* {this.state.isAdd && <AddCategory addcat={this.addcat} isShow={this.isShow}/>} */}
                    {/* {this.state.isEdit && <EditCategory id={this.state.editID} titleNow={this.state.titleNow} editCategory={this.editCategory} setEdit={this.setEdit}/>} */}
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
}
