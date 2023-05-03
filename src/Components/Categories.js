import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: [
                {
                    id:1,
                    name:'Все'
                },
                {
                    id:2,
                    name:'Iphone'
                },
                {
                    id:3,
                    name:'Ipad'
                },
                {
                    id:4,
                    name:'MacBook'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick={()=> this.props.chooseCategory(el.id)}>
                {el.name}
            </div>
        ))}
      </div>
    )
  }
}

export default Categories