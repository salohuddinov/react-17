import React from 'react'
import { Link } from 'react-router-dom'
import { useGetUsersQuery } from '../../context/usersApi'

const Users = () => {
  document.title = "USER"
  const { data, error } = useGetUsersQuery()

  if (error) {
    alert(error.message)
  }
  let users = data?.data?.map(user => <div key={user.id}>
    <strong>{user.FirstName}</strong>
    <p>{user.LastName}</p>
    <hr />
    <br />
  </div>)
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
          <h2>Users</h2>
          {users}
        </div>
      </div>
    </>
  )
}

export default Users