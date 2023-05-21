import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Nav from './Nav';

export default class CustomersAdmin  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            columns:[
                {
                    name:'ID',
                    selector:row => row.id,
                },
                {
                    name:'Name',
                    selector:row => row.userName,
                },
                {
                    name:'Email',
                    selector:row => row.email,
                },
                {
                    name:"Action",
                    cell: row => (
                        <div>
                             <button className='btn btn-primary' >Edit</button>
                             <button style={{marginLeft:10}} className='btn btn-danger' onClick={()=> this.DeleteById(row.id)}>Delete</button>
                        </div>
                   )
                }
            ],
            columnsUser:[
                {
                    name:'ID',
                    selector:row => row.id,
                },
                {
                    name:'Name',
                    selector:row => row.userName,
                },
                {
                    name:'Email',
                    selector:row => row.email,
                }
            ],
            records:this.props.data,
            recordsUsers: this.props.dataUsers
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleFilterAdmin = this.handleFilterAdmin.bind(this)
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
                    <DataTable title='Users' columns={this.state.columnsUser} data={this.state.recordsUsers} fixedHeader pagination></DataTable>
                    <br></br> <br></br> <br></br>
                    <div className='text-end'>
                        <input style={{marginBottom:0}} className='inp-admin' type="text" placeholder='Enter query...' onChange={this.handleFilterAdmin}/>
                    </div>
                    <DataTable title='Admins' columns={this.state.columns} data={this.state.records} fixedHeader pagination actions={<button className='btn btn-success'>Add</button>}></DataTable>
                    {/* {this.state.isAdd && <AddCategory addcat={this.addcat} isShow={this.isShow}/>} */}
                    {/* {this.state.isEdit && <EditCategory id={this.state.editID} titleNow={this.state.titleNow} editCategory={this.editCategory} setEdit={this.setEdit}/>} */}
                </div>
      </div>
    )
  }
  handleFilter(event){
    const newDate = this.props.dataUsers.filter(row => {
        return row.userName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({recordsUsers: newDate})
}
handleFilterAdmin(event){
    const newDate = this.props.data.filter(row => {
        return row.userName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({records: newDate})
}
DeleteById(id){
    const tempArr = this.state.records.filter((el)=>{return el.id != id})
    this.setState({records:tempArr})
}
}
