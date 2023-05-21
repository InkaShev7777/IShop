import React, { Component } from 'react'

export default class EditOrder extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    stateProcess(text){
        if(text == 'Done')
        {
           //props.method
           this.props.stateNow = 1
        }
        if(text == "Proccesing"){

        }
    }
  render() {
    return (
      <div className='full-item'>
        <div>
            <h3>Edit Order</h3>
                {this.props.stateNow == 0 &&
                    <select onChange={(e)=>{this.stateProcess(e.target.value)}}>
                        <option selected>Proccesing</option>
                        <option>Done</option>
                    </select>
                }
                {this.props.stateNow == 1 &&
                    <select>
                        <option>Proccesing</option>
                        <option selected>Done</option>
                    </select>
                }
            <div style={{width:100, borderRadius:10,background:'green'}} className='addToBucket' onClick={()=>{}} >Save</div>
            <div style={{width:100, borderRadius:10,marginRight:'20%'}} className='addToBucket' onClick={()=>this.props.edit()} >Close</div>
        </div>
      </div>
    )
  }
}
