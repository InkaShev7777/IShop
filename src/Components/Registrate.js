import React, { useState } from 'react'
import axios from 'axios'

export default function Registrate(props) {
  let [userName, setUserName] = useState("")
  let [password, setPassword] = useState("")
  let [mail, setMail] = useState("")
  return (
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
        console.log(res);
        // add if (token == ok ) else(massage error)

        //
        // props = setcartopen???
        //

      })
      this.props.cartRegistrateOpen = false
    }}>Confirm</button>
  </div>
  )
}
