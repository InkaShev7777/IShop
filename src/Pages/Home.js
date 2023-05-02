import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Items from '../Components/Cards'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders:[],
      items:[
        {
          id:1,
          title:'Apple iPhone 14 Pro Max',
          img:'https://jabko.ua/image/cache/catalog/products/2022/09/072301/photo_2022-09-07_22-54-13-1397x1397.jpg.webp',
          desc:'',
          price:'1600'
        },
        {
          id:2,
          title:'Apple iPhone 13 Pro Max',
          img:'https://jabko.ua/image/cache/catalog/products/2021/09/142226/2021-09-14%2021.44.24%20(1)-1397x1397.jpg.webp',
          desc:'',
          price:'1600'
        },
        {
          id:3,
          title:'Apple iPhone 12 Pro Max',
          img:'https://jabko.ua/image/cache/catalog/products/2022/04/081913/764f8071b21fa3d7b7430ba518665d4d-1397x1397.jpg.webp',
          desc:'',
          price:'1600'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }
  addToOrder(item){
    this.setState({orders:[...this.state.orders,item]})
  }
}
export default Home