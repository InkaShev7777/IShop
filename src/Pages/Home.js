import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Items from '../Components/Cards'
import Categories from '../Components/Categories'
import ShowFullItem from '../Components/ShowFullItem'
import axios from 'axios'
import Pagination from '../Components/Pagination'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders:[],
      currentItems:[],
      items:[],
        showFullItem: false,
        fullItem:{},
        currentPage: 1,
        currentPerPage: 3,
        lastPageIndex:0,
        firstPageIndex:0,
        currentPageNow:[],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.setPaginate = this.setPaginate.bind(this)
    this.search = this.search.bind(this)
    this.filterID = this.filterID.bind(this)

    this.state.lastPageIndex = this.state.currentPage * this.state.currentPerPage
    this.state.firstPageIndex = this.state.lastPageIndex - this.state.currentPerPage
  }
  componentDidMount() {
    axios.get(`https://localhost:7031/api/ControllerClass/get-all-product`)
    .then(res => {
      const rest = res.data.value;
      this.setState({items: rest });
      this.state.currentItems = this.state.items
      this.state.currentPageNow = this.state.currentItems.slice(this.state.firstPageIndex,this.state.lastPageIndex)
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} search={this.search} onDelete={this.deleteOrder} />
        <Categories filter={this.filterID} chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentPageNow} onAdd={this.addToOrder}/>
        <Pagination currentPerPage ={this.state.currentPerPage} totalCount={this.state.currentItems.length} paginate={this.setPaginate}/>
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
      this.setState({currentPageNow: this.state.items.slice(this.state.firstPageIndex,this.state.lastPageIndex)})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.idCategory === idCat),
      currentPageNow: this.state.items.filter(el => el.idCategory === idCat).slice(this.state.firstPageIndex,this.state.lastPageIndex)
    })
    console.log(this.state.currentPageNow);
  }
  setPaginate(pageNumber){
    this.setState({
      currentPageNow: this.state.currentItems.slice((pageNumber * this.state.currentPerPage - this.state.currentPerPage),(pageNumber * this.state.currentPerPage))
    })
  }
  search = (text)=> {
    if(text.length > 0){
      axios.get(`https://localhost:7031/api/ControllerClass/search-by-product?qweryText=${text}`)
      .then(res => {
        const rest = res.data.value
        if(res.data.value.status !== 400){
          this.setState({
            currentItems: rest,
            currentPageNow: rest.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
            })
        }
      })
    }
    this.setState({
      currentPageNow: this.state.currentItems.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
    })
  }
  filterID(id){
    const comparePriceUP = (a,b)=>a.price - b.price
    const comparePriceDOWN = (a,b)=>b.price - a.price
    const compareNameUP = (a, b) => a.title < b.title ? -1 : 1;
    const compareNameDOWN = (a, b) => a.title > b.title ? -1 : 1;
    if(id === 1){
      this.setState({
        currentItems:this.state.items,
        currentPageNow: this.state.items.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
      })
    }
    if(id === 2){
      const byPrice = this.state.currentItems.sort(comparePriceUP)
      this.setState({
        currentPageNow: byPrice.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
      })
    }
    if(id === 3){
      const byPrice = this.state.currentItems.sort(comparePriceDOWN)
      this.setState({
        currentPageNow: byPrice.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
      })
    }
    if(id === 4){
      const byPrice = this.state.currentItems.sort(compareNameUP)
      this.setState({
        currentPageNow: byPrice.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
      })
    }
    if(id === 5){
      const byPrice = this.state.currentItems.sort(compareNameDOWN)
      this.setState({
        currentPageNow: byPrice.slice((1 * this.state.currentPerPage - this.state.currentPerPage),(1 * this.state.currentPerPage))
      })
    }
  }
}
export default Home