import React from 'react'
import axios from 'axios'
import Sidebar from '../Components/Admin/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomeAdmin from '../Components/Admin/HomeAdmin'
import { useState, useEffect } from 'react'
import CategoriesAdmin from '../Components/Admin/CategoriesAdmin'
import CustomersAdmin from '../Components/Admin/CustomersAdmin'
import OrdersAdmin from '../Components/Admin/OrdersAdmin'
import ProductsAdmin from '../Components/Admin/ProductsAdmin'
// import CategoriesAdmin rom './'

export default function Admin() {
  const [toggle, setTogle] = useState(true)
  const [idCat, setIdCat] = useState(1)
  const [countProducts, setCountProducts] = useState(0)
  const [countCustomers, setCountCustomers] = useState(0)
  const [countCategories, setCountCategories] = useState(0)
  const [countOrders, setCountOrders] = useState(0)
  const [isAuthoriseAdmin, setIsAuthoriseAdmin] = useState(false)
  const [idProductNow, setIdProductNow] = useState(0)
  const [idCategoryNow, setIdCategoryNow] = useState(0)
  // Data from BD
  const [dataProduct,setDataProduct] = useState([]);
  const [dataCategories,setDataCategories] = useState([]);
  const [dataUsers,setDaataUsers] = useState([]);
  const [dataOrders,setDaataOrders] = useState([]);
  const [dataAdmins,setDaataAdmin] = useState([]);


  const Toggle = () => {
    setTogle(!toggle)
  }
  const ChooiceCat = (id) => {
    setIdCat(id)
    console.log(id)
  }
  useEffect(() => {
    getUsers()
    getProducts()
    getCategories()
    getOrders()
    getAdmin()
    setTimeout(checkAdmin,1);
  }, [])
  const getUsers = () => {
    axios.get(`https://localhost:7031/api/Authentication/get-all-users`)
      .then(res => {
        const rest = res.data.value;
        setCountCustomers(rest.length)
        setDaataUsers(rest)
      })
  }
  const getProducts = () => {
    axios.get(`https://localhost:7031/api/ControllerClass/get-all-product`)
      .then(res => {
        const rest = res.data.value;
        setIdProductNow(rest[rest.length-1].id)
        setCountProducts(rest.length)
        setDataProduct(rest)
      })
  }

  const getCategories = () => {
    axios.get(`https://localhost:7031/api/ControllerClass/get-all-category`)
      .then(res => {
        const rest = res.data.value;
        setIdCategoryNow(rest[rest.length-1].id)
        setCountCategories(rest.length)
        setDataCategories(rest)
      })
  }
   async function getOrders(){
    await axios.get(`https://localhost:7031/api/ControllerClass/get-all-orders`)
      .then(res => {
        const rest =  res.data.value;
        setCountOrders(rest.length)
        setDaataOrders(rest)
        return rest
      })
  }
  const checkAdmin = () => {
    if (sessionStorage.getItem('token') !== null) {

      axios.post(`https://localhost:7031/api/Authentication/Login`, {
        id: 0,
        userName: sessionStorage.getItem('loginUser'),
        password: sessionStorage.getItem('passwordUser')
      })
        .then(res => {
          const rest = res.data.value;
          if (res.data.isAdmin == true) {
            setIsAuthoriseAdmin(true)
          }
        })
    }
    else {
      alert("Что-то пошло не так :-( ")
    }
  }
  const getAdmin = () => {
    axios.get(`https://localhost:7031/api/Authentication/get-all-admins`)
    .then(res => {
      const rest = res.data.value;
      setDaataAdmin(rest)
    })
  }
  return (
    <div>
      {isAuthoriseAdmin &&
        <div className='container-fluid bg-secondary min-vh-100'>
          <div className='row'>
            {toggle &&
              <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                <Sidebar ChooiceCat={ChooiceCat} />
              </div>
            }
            {toggle &&
              <div style={{ height: 50 }} className='col-4 col-md-2'></div>
            }
            <div className='col'>
              {idCat === 1 &&<HomeAdmin countCategories={countCategories} countCustomers={countCustomers} countOrders={countOrders} countProducts={countProducts} Toggle={Toggle} />}
              {idCat === 2 &&<CategoriesAdmin idCategoryNow={idCategoryNow} getCategories={getCategories}  Toggle={Toggle} dataCategories={dataCategories}/>}
              {idCat === 3 && <ProductsAdmin idProductNow={idProductNow} getProducts={getProducts} data={dataProduct} dataCategory={dataCategories}  Toggle={Toggle}/>}
              {idCat === 4 && <CustomersAdmin dataUsers={dataUsers} data={dataAdmins} Toggle={Toggle}/>}
              {idCat === 5 &&  <OrdersAdmin data={dataOrders} updateOrders={getOrders}  Toggle={Toggle}/>}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
