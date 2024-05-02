import React from 'react'
import { Link } from 'react-router-dom'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'

function MasageProduct() {
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
                    <ProductWrapper />
                </div>
            </div>
        </>
    )
}

export default MasageProduct