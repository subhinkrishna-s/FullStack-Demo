import React from 'react'

const NoAccess = () => {
  return (
    <div className='mt-5 text-center'>
        <h2>Access Denied!</h2>
        <p>You don't have permission to view this page.</p>
        <button className='btn btn-dark' onClick={()=>window.location.href='/'}>Goto Homepage</button>
    </div>
  )
}

export default NoAccess