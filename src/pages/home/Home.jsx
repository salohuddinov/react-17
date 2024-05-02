import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Categories from '../../components/categories/Categories'
import Banner from '../../components/banner/Banner'


const Home = () => {
  document.title = "HOME"
  return (
    <>
      <div className="admindeshbord">
        <div className="toogle">
          <Link className='toogle__link ' to={'/'}>admin/create-category</Link>
          <Link className='toogle__link ' to={"/createproduct"} >Admin/create-products</Link>
          <Link className='toogle__link ' to={"/masageproduct"} >Admin/manege-products</Link>
          <Link className='toogle__link ' to={"/signup"} >Admin/create-user</Link>
          <Link className='toogle__link ' to={"/users"} >Admin/manege-user</Link>
        </div>
        <div className="admin__cont">
          <Categories />
          <Banner />
        </div>
      </div>
    </>
  )
}

export default Home