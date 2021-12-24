import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UserDetails(id,role) {
    const [user,setUser] = useState({})
    const [err,setError] =  useState('')
    useEffect(()=>{
        axios.get(`http://localhost:9000/employee/${id}`)
        .then(response=>{
            setUser({...response.data,'role':role})
        })
        .catch(err=>{
            setError('Error')
        })
    },[])
    return ( 
        err ? err : user
    )
}

export default UserDetails
