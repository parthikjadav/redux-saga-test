import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserHeader from './components/user/Header'
import AdminHeader from './components/admin/Header'
import UserList from './components/admin/UserList'
import Product from './components/admin/Product'


const App = () => {

  let role = "admin"

  if(role == "admin"){
    return (
      <>
      <AdminHeader/>
       <Routes>
        <Route element={<UserList/>} path="/"/>
        <Route element={<Product/>} path="/products"/>
       </Routes>
      </>
    )
  }
  if(role == "user"){
    return (
      <>
        <UserHeader/>
        <Routes>
          <Route element="" path="/" />
        </Routes>
      </>
    )
  }
}

export default App
