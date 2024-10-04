import React, {useState} from 'react'

const Signup = () => {
    const [fullname, setFullname] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        if(fullname!==''&&city!==''&&email!==''&&confirmPassword!==''&&password!==''){
            if(password===confirmPassword){
                const User = {fullname, city, email, password}
                fetch('http://localhost:4000/signup',{
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({user: User}),
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
                    console.log('Error in Signing in: ',err)
                    alert('Please try again later!')
                })
            }else{
                alert('Please enter the same password')
            }
        }else{
            alert('Please fill all detials!')
        }
    }

  return (
    <div>
      <h2 className='text-center'>Sign Up here</h2>
      <p className='text-end mt-3'>Already have an Account? <a href='/signin'>Click here</a></p>

      <form className='border p-2 rounded needs-validation col-11 col-md-8 col-lg-6 col-xl-5 mx-auto' novalidatenovalidate onSubmit={(e)=>handleSignup(e)}>
        <div className="mb-3">
            <label htmlFor="FormControlInputName" className="form-label">Full Name</label>
            <input required value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" className="form-control" id="FormControlInputName" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="FormControlInputCity" className="form-label">City</label>
            <input required value={city} onChange={(e)=>setCity(e.target.value)} type="text" className="form-control" id="FormControlInputCity" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="FormControlInputEmail" className="form-label">Email address</label>
            <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="FormControlInputEmail" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="FormControlInputPassword" className="form-label">Password</label>
            <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="FormControlInputPassword" placeholder="********" />
        </div>
        <div className="mb-3">
            <label htmlFor="FormControlInputConfirmPassword" className="form-label">Confirm Password</label>
            <input required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="form-control" id="FormControlInputConfirmPassword" placeholder="********" />
        </div>
        <button type='submit' className='btn btn-primary'>Sign in</button>
      </form>
    </div>
  )
}

export default Signup
