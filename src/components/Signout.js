import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

const Signout = () => {

    const {isAuth, setIsAuth, setUser} = useContext(DataContext)


    const handleSignout = () => {
        if(isAuth===true){
            fetch('http://localhost:4000/signout',{
                method: 'POST',
                credentials: 'include'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    setIsAuth(false)
                    setUser(null)
                    alert('Signed Out! You will be redirected to the Homepage...')
                    window.location.href='/'
                }
                else{
                    setIsAuth(false)
                    console.log(data.message)
                    alert('You will be redirected to the Homepage...')
                    window.location.href='/'
                }
            })
            .catch(err=>{
                setIsAuth(false)
                console.log('Error in Signing out: ',err)
                alert('Please try again later! You will be redirected to the Homepage...')
                window.location.href='/'
            })
        }
        else{
            window.location.href='/'
        }
    }


    useEffect(()=>{
        if(isAuth!==null && isAuth){
            handleSignout()
        }
    },[isAuth])


  return (
    <div>
        <h2>Signing out!</h2>
        <p>You will be redirected to the Homepage on Successfull Sign out...</p>
    </div>
  )
}

export default Signout