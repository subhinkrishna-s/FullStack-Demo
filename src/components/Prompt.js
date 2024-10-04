import React, { useEffect } from 'react'

const Prompt = () => {

    useEffect(()=>{
        window.location.href="/"
    },[])

  return (
    <div className='text-center mt-5'>
        <h2>Redirecting now..</h2>
        <p>On the way to Homepage!</p>
    </div>
  )
}

export default Prompt