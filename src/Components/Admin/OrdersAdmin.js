import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Nav from './Nav'
import EditOrder from './EditOrder'

export default class OrdersAdmin  extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isEdit: false,
            stateNow : -1,
            idNow:-1,
            idUser:'',
            data:'',
            idproduct:-1,
            columns:[
                {
                    name:'ID',
                    selector:row => row.id
                },
                {
                    name:'ID User',
                    selector:row => row.idUser
                },
                {
                    name:'Date',
                    selector:row => row.date
                },
                {
                    name:'ID Product',
                    selector:row => row.idProduct
                },
                {
                    name:'State Order',
                    selector:row => 
                    <div>
                    {row.starte == 1 &&
                        <select disabled>
                            <option selected>Done</option>
                            <option>Processing</option>
                        </select>
                    }
                    {row.state == 0 &&
                        <select disabled>
                            <option>Done</option>
                            <option selected>Processing</option>
                        </select>
                    }
                </div>
                },
                {
                    name:"Action",
                    cell: row => (
                        <div>
                             <button className='btn btn-primary' onClick={()=>{this.EditNow(); this.setState({stateNow: row.state})}} >Edit</button>
                             <button style={{marginLeft:10}} className='btn btn-danger' onClick={()=> this.DeleteById(row.id)}>Delete</button>
                        </div>
                   )
                }
            ],
            records: this.props.data
        }
        this.EditNow = this.EditNow.bind(this)
        this.DeleteById = this.DeleteById.bind(this)
    }
  render() {
    return (
      <div className='px-3'>
        <Nav Toggle={this.props.Toggle}/>
        <div className='container mt-5'>
                    {/* <div className='text-end'>
                        <input style={{marginBottom:0}} className='inp-admin' type="text" placeholder='Enter query...'/>
                    </div> */}
                    <DataTable title='Orders' columns={this.state.columns} data={this.state.records} fixedHeader pagination></DataTable>
                    {this.state.isEdit && <EditOrder stateNow={this.state.stateNow} edit={this.EditNow}/>}
                </div>
      </div>
    )
  }
  EditNow(){
    this.setState({isEdit: !this.state.isEdit})
  }
  edit(){
    const mas = [...this.state.records]
  }
  DeleteById(id){
    const tempArr = this.state.records.filter((el)=>{return el.id != id})
    this.setState({records:tempArr})
}
}
