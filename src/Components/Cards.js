import React, { Component } from 'react'
import Card from './Card'

export class Cards extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (<Card onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>))}
      </main>
    )
  }
}

export default Cards