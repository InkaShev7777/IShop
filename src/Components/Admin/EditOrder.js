import React, { Component } from 'react'

export default class EditOrder extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stateNow:-1,
            value:''
        }
        this.stateProcess = this.stateProcess.bind(this)
    }
  render() {
    return (
      <div className='full-item'>
        <div>
            <h3>Edit Order</h3>
                {this.props.stateNow == 0 &&
                    <select onChange={(e)=>{this.setState({value:e.target.value})}}>
                        <option selected>Proccesing</option>
                        <option>Done</option>
                    </select>
                }
                {this.props.stateNow == 1 &&
                    <select onChange={(e)=>{this.setState({value:e.target.value})}}>
                        <option>Proccesing</option>
                        <option selected>Done</option>
                    </select>
                }
            <div style={{width:100, borderRadius:10,background:'green'}} className='addToBucket' onClick={()=>{this.stateProcess(this.state.value)}} >Save</div>
            <div style={{width:100, borderRadius:10,marginRight:'20%'}} className='addToBucket' onClick={()=>this.props.edit()} >Close</div>
        </div>
      </div>
    )
  }
  stateProcess(text){
    if(text == 'Done')
    {
      this.setState({stateNow:1})
      this.props.setStateNow(1)
    }
    if(text == "Proccesing"){
        this.setState({stateNow:0})
        this.props.setStateNow(0)
    }
}
}
