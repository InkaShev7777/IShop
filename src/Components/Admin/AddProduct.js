import React, { Component } from 'react'

export default class AddProduct  extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }   
}
  render() {
    return (
        <div className='full-item'>
        <div>
            <h3>Add Product</h3>
            <div className='add-product'>
              <input type='file' onChange={(e)=> console.log(e.target.value)}/>
              <input type='text' placeholder='Title...'></input>
              <input type='text' placeholder='Model...'></input>
              <input min={0} type='number' placeholder='Price...'></input>
              <select>
                {this.props.dataCategory.map((el)=>
                  {if(el.id != 1)
                    return ( <option>{el.title}</option>)
                  }
                )}
              </select>
              <input type='text' placeholder='Description...'></input>
              <input  min={0} type='number' placeholder='Count Product...'></input>
              <select>
                <option>True</option>
                <option>False</option>
              </select>
            </div>
            <div style={{width:100, borderRadius:10,background:'green'}} className='addToBucket'>Add</div>
            <div style={{width:100, borderRadius:10,marginRight:'20%'}} className='addToBucket' onClick={()=>this.props.isShow()} >Close</div>
        </div>
    </div>
    )
  }
}
