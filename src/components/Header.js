import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Header = () => {

    const {isAuth, setIsAuth, setUser, User} = useContext(DataContext)

 const handleSignout = () => {
  fetch('http://localhost:4000/signout',{
    method: 'POST',
    credentials: 'include'
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.success){
          setIsAuth(false)
          setUser(data.User)
      }
      else{
          alert(data.message)
      }
  })
  .catch(err=>{
      console.log('Error in Signing out: ',err)
      alert('Please try again later!')
  })
 }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand text-primary fw-bolder fs-3" href="/">SAN APP</a>
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hello {isAuth?User.fullname:'Quest'}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Home</a></li>
                {(isAuth===null || isAuth===false)&&<li><a className="dropdown-item" href="/signin">Sign in</a></li>}
                {(isAuth===null || isAuth===false)&&<li><a className="dropdown-item" href="/signup">Sign up</a></li>}
                {(User!==null && User.isAdmin)&&<li><a className="dropdown-item rounded-pill my-1 text-light bg-success" href="/dashboard">Dashboard</a></li>}
                {(isAuth!==null && isAuth)&&<li><a className="dropdown-item rounded-pill my-1 text-light bg-danger" href="/signup" onClick={handleSignout}>Sign Out</a></li>}
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header
