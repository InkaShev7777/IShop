<<<<<<< Updated upstream
import React, { Component } from 'react'
=======
import React, { Component, useEffect } from 'react'
import axios from 'axios'
>>>>>>> Stashed changes

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick={()=> this.props.chooseCategory(el.id)}>
<<<<<<< Updated upstream
                {el.name}
=======
                {el.title}
>>>>>>> Stashed changes
            </div>
        ))}
      </div>
    )
  }
}

export default Categories