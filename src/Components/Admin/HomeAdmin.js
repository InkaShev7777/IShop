import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

export default function HomeAdmin(props) {

    return (
        <div className='px-3'>
            <Nav Toggle={props.Toggle} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} className='container-fluid'>
                <div className='row g-1 my-1'>
                    <div className='p-2' style={{ width: 400 }}>
                        <div style={{ height: 150 }} className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{props.countProducts}</h3>
                                <p className='fs-5'>Products</p>
                            </div>
                            <i className='bi bi-table p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
                <div className='row g-1 my-1'>
                    <div className='p-2' style={{ width: 400 }}>
                        <div style={{ height: 150 }} className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{props.countCategories}</h3>
                                <p className='fs-5'>Categories</p>
                            </div>
                            <i className='bi bi-card-checklist p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
                <div className='row g-1 my-1'>
                    <div className='p-2' style={{ width: 400 }}>
                        <div style={{ height: 150 }} className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{props.countCustomers}</h3>
                                <p className='fs-5'>Users</p>
                            </div>
                            <i className='bi bi-people p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
                <div className='row g-1 my-1'>
                    <div className='p-2' style={{ width: 400 }}>
                        <div style={{ height: 150 }} className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{props.countOrders}</h3>
                                <p className='fs-5'>Orders</p>
                            </div>
                            <i className='bi bi-basket3-fill p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* <table className="table caption-top bg-white  mt-2">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</table> */}