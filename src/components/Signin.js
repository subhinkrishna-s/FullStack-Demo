import React, { useState } from 'react'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = (e) => {
        e.preventDefault()
        if(email!==''&&password!==''){
          fetch('http://localhost:4000/signin',{
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}),
            credentials: 'include'
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.success){
              alert(data.message)
              window.location.href="/"
            }
            else{
              alert(data.message)
            }
          })
          .catch(err=>{
            console.log('Error in Signing up: ',err)
            alert('Please try again later!')
          })
        }else{
            alert('Please fill all detials!')
        }
    }

  return (
    <div>
      <h2 className='text-center'>Sign in here</h2>
      <p className='text-end mt-3'>Don't have an Account? <a href='/signup'>Click here</a></p>

      <form className='border p-2 rounded needs-validation col-11 col-md-8 col-lg-6 col-xl-5 mx-auto' novalidate onSubmit={(e)=>handleSignin(e)}>
        <div className="mb-3">
            <label htmlFor="FormControlInputEmail" className="form-label">Email address</label>
            <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="FormControlInputEmail" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="FormControlInputPassword" className="form-label">Password</label>
            <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="FormControlInputPassword" placeholder="********" />
        </div>
        <p className='text-end'>Forget password? <a href='/forget-password'>Click here</a></p>
        <button type='submit' className='btn btn-primary'>Sign in</button>
      </form>
    </div>
  )
}

export default Signin
