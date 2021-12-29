import axios from 'axios'
import React, { useEffect } from 'react'

function ChangeEventStatus() {
    useEffect(()=>{
        axios.get("http://localhost:9000/change/event/status")
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <>
        </>
    )
}

export default ChangeEventStatus
