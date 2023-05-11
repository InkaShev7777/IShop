import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import {FaSistrix} from "react-icons/fa"
import Order from './Order'
import axios from 'axios'
const showOrders = (props) =>{
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return(
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
      <button className='btn-buy' onClick={()=>{
        if(sessionStorage.getItem('token') != null){
          props.orders.forEach(el => axios.post('https://localhost:7031/api/ControllerClass/add-order',{
            id:0,
            idUser:sessionStorage.getItem('idUser'),
            date:new Intl.DateTimeFormat(
              'en-US', 
              {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}
              ).format(new Date()),
            idProduct:el.id,
            state:0
          }))
          props.clearorders();
        }
        else{
          alert("You must authorization")
        }
      }}>Buy</button>
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
  let [cartOpen, setCartOpen] = useState(false)
  let [cartAuthorizeOpen, setcartAuthorizeOpen] = useState(false)
  let [cartRegistrateOpen, setcartRegistrateOpen] = useState(false)
  let [searchOpen, setSearchOpen] = useState(false)
  let [userName, setUserName] = useState("")
  let [password, setPassword] = useState("")
  let [mail, setMail] = useState("")
  let [text, setText] = useState("")
  return (
    <header>
      <div>
        <span className='logo'>iStore</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li onClick={()=> setcartAuthorizeOpen(cartAuthorizeOpen =! cartAuthorizeOpen)}>Кабинет</li>
          {cartAuthorizeOpen && (
            
            <div className='auth-reg-cart'>
              <input type='text' placeholder='Login' onChange={(e)=> setUserName(e.target.value)}></input>
              <input type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></input>
              <button className='btn-confirm' onClick={()=>{
                if(sessionStorage.getItem('token') == null){
                  axios.post(`https://localhost:7031/api/Authentication/Login`,{
                    id:0,
                    userName:userName,
                    password:password
                  })
                .then(res => {
                  const rest = res.data.value;
                  console.log(res);
                  sessionStorage.setItem('token',res.data.token);
                  sessionStorage.setItem('idUser',res.data.id);
                })
                }
                else{
                  alert ("authorize")
                }
                setcartAuthorizeOpen(false)
              }}>Confirm</button>
              <p onClick={()=> {setcartAuthorizeOpen(false); setcartRegistrateOpen(true);}}>Registration</p>
              <button style={{marginBottom:10}} className='btn-confirm' onClick={()=>{sessionStorage.clear();setcartAuthorizeOpen(false)}}>Log Out</button>
            </div>
          )}
          {cartRegistrateOpen &&(
            <div className='auth-reg-cart'>
            <input type='text' placeholder='Login' onChange={(e)=> setUserName(e.target.value)}></input>
            <input type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></input>
            <input type='mail' placeholder='Mail' onChange={(e)=> setMail(e.target.value)}></input>
            <button className='btn-confirm' onClick={()=>{
              axios.post(`https://localhost:7031/api/Authentication/regUser`,{
                  id:0,
                  userName:userName,
                  password:password,
                  email:mail
                })
              .then(res => {
                const rest = res.data.value;
                if(res.data.token != null){
                  sessionStorage.setItem('token',res.data.token);
                  sessionStorage.setItem('idUser',res.data.id);
                }
                else{
                  alert("Login or Password is not correct")
                }
                // console.log(res.data.token);
                
                // add if (token == ok ) else(massage error)
        
                //
                // props = setcartopen???
                //
        
              })
            }}>Confirm</button>
            <p onClick={()=> setcartRegistrateOpen(false)}>Cancellation</p>
          </div>
          )}
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
                <input type="text" placeholder='Enter massage' onChange={(e) => setText(e.target.value)}/>
                <div className='search-btn' onClick={()=> {props.search(text); setSearchOpen(searchOpen= !searchOpen)}}>Search</div>
            </div>
          )
        }
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header