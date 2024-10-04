import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

const Dashboard = () => {

    const {User, isAuth, setIsAuth, setUser} = useContext(DataContext)
    const [Users, setUsers] = useState(null)

    console.log('Users: ',Users)

    useEffect(()=>{
        if(isAuth===true){
            fetch('http://localhost:4000/fetch-users',{
                method: 'POST',
                credentials: 'include'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    setUsers(data.Users)
                    console.log('Users fetched: ',data.Users)
                }
                else{
                    alert(data.message)
                }
            })
            .catch(err=>{
                console.log('Error in fetching Users: ',err)
                alert('Please try again later!')
            })
        }
    },[])

    console.log(Users)


    if(isAuth!==null&&isAuth&&User!==null&&User.isAdmin){
        return (
            <div className='mt-5 text-center'>
                <h2>Admin Dashboard</h2>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">City</th>
                            <th className='table-sm' scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Users!==null&&Users.map((user, i)=>{
                                    return(
                                        <tr key={i}>
                                            <th scope="row">{i+1}</th>
                                            <td>{user.fullname}</td>
                                            <td>{user.city}</td>
                                            <td className='table-sm'>{user.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    else if(isAuth!==null&&isAuth===false&&User!==null&&User.isAdmin===false){
        return(
            <div className='text-center'>
                <h2>You dont have access to this page</h2>
                <p>Please try again later.</p>
            </div>
        )
    }
    else{
        return(
            <div className='text-center'>
                <h2>Please wait...</h2>
                <p>Fetching data from the Server.</p>
            </div>
        )
    }

}

export default Dashboard