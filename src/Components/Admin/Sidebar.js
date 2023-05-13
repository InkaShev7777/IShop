import React from 'react'
export default function Sidebar({ChooiceCat}) {
  return (
    <div className='bg-white sidebar p-2'>
        <div className='m-2'>
            <i className='bi bi-apple me-2 fs-4'></i>
            <span className='brand-name fs-4'>IStore</span>
        </div>
        <hr className='text-dark'></hr>
        <div className='list-group list-group-flush'>
            {/* Компоненты меню  */}
            <a className='list-group-item py-2 my-1' onClick={()=>{ChooiceCat(1)}}>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <span>Dashboard</span>
            </a>
            <a className='list-group-item py-2 my-1' onClick={()=>{ChooiceCat(2)}}>
                <i className='bi bi-card-checklist fs-5 me-3'></i>
                <span>Categories</span>
            </a>
            <a className='list-group-item py-2 my-1'>
                <i className='bi bi-table fs-5 me-3'></i>
                <span >Products</span>
            </a>
            <a className='list-group-item py-2 my-1'>
                <i className='bi bi-people fs-5 me-3'></i>
                <span >Customers</span>
            </a>
            <a className='list-group-item py-2 my-1'>
                <i className='bi bi-basket3-fill fs-5 me-3'></i>
                <span >Orders</span>
            </a>
            <a className='list-group-item py-2 my-1' onClick={()=>{sessionStorage.clear(); window.location.assign('/')}}>
                <i className='bi bi-power fs-5 me-3'></i>
                <span >Logout</span>
            </a>
        </div>
    </div>
  )
}
