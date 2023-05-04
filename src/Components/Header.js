import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import {FaSistrix} from "react-icons/fa"
import Order from './Order';
const showOrders = (props) =>{
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return(
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  )
}
const showNothing = () =>{
  return(
  <div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}
function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  let [searchOpen, setSearchOpen] = useState(false);
  return (
    <header>
      <div>
        <span className='logo'>iStore</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (
          <div className='shop-cart'>
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )
        }
        <FaSistrix onClick={()=> setSearchOpen(searchOpen= !searchOpen)} className={`search-button ${searchOpen && 'active'}`}/>
        {
          searchOpen&&(
            <div className='search-cart'>
                <input type="text" placeholder='Enter massage'/>
                <button>Search</button>
            </div>
          )
        }
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header