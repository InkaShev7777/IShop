import React from 'react'
import Sidebar from '../Components/Admin/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomeAdmin from '../Components/Admin/HomeAdmin'
import { useState } from 'react'

export default function Admin() {
  const [toggle, setTogle] = useState(true)
  const Toggle = ()=>{
    setTogle(!toggle)
  }
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle &&
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>
        }
        {toggle &&
         <div className='col-4 col-md-2'></div>
        }
        <div className='col'>
          <HomeAdmin Toggle={Toggle} />
        </div>
      </div>
    </div>
  )
}
