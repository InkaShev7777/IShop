import React, { Component, useEffect } from 'react'
import axios from 'axios'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: []
        }
    }
    componentDidMount() {
        axios.get(`https://localhost:7031/api/ControllerClass/get-all-category`)
          .then(res => {
            const rest = res.data.value;
            this.setState({categories: rest });
          })
      }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick={()=> this.props.chooseCategory(el.id)}>
                {el.title}
            </div>
        ))}
      </div>
    )
  }
}

export default Categories