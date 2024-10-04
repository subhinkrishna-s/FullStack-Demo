import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null)



const DataContextt = (props) => {

    const [isAuth, setIsAuth] = useState(null)
    const [User, setUser] = useState(null)

    useEffect(()=>{
        if(isAuth===null){
            fetch('http://localhost:4000/authcheck',{
                method: 'POST',
                credentials: 'include'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    setIsAuth(true)
                    setUser(data.User)
                }
                else{
                    setIsAuth(false)
                    console.log(data.message)
                    
                }
            })
            .catch(err=>{
                setIsAuth(false)
                console.log('Error in Auth checking: ',err)
                alert('Please try again later..!')
            })
        }
    },[])



    const SendData = {isAuth, setIsAuth, User, setUser}

  return (
    <DataContext.Provider value={SendData}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataContextt