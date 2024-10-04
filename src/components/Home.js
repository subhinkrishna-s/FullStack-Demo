import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Home = () => {

  const {isAuth, User} = useContext(DataContext)


  console.log(isAuth)

  console.log('usER: ',User)

  if((isAuth!==null)&&isAuth){
    return (
      <div className='text-center'>
          <h1 className='mt-5'>Welcome {isAuth?User.fullname:'Quest'}</h1>
          <p>{isAuth?'You have signed in':'Please signin to continue...'}</p>
          <button className='btn btn-primary' onClick={()=>window.location.href=`/${isAuth?'signout':'signin'}`}>{isAuth?'Sign Out':'Sign in'}</button>
      </div>
    )
  }
  else{
    return(
      <div className='text-center'>
          <h1 className='mt-5'>Welcome Quest</h1>
          <p>Please signin to continue...</p>
          <button className='btn btn-primary' onClick={()=>window.location.href=`/${isAuth?'signout':'signin'}`}>{isAuth?'Sign Out':'Sign in'}</button>
      </div>
    )
  }
}

export default Home
