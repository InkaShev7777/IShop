import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Items from '../Components/Cards'
import Categories from '../Components/Categories'
import ShowFullItem from '../Components/ShowFullItem'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders:[],
      currentItems:[],
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
        }],
        showFullItem: false,
        fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
    )
  }
  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el =>{
      if(el.id === item.id){
          isInArray = true;
      }
    })
    if(!isInArray){
      this.setState({orders:[...this.state.orders,item]})
    }
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  chooseCategory(idCat){
    if(idCat === 1){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.id === idCat)
    })
  }
}
export default Home