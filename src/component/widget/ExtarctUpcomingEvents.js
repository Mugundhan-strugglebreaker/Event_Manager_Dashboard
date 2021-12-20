import axios from 'axios'
import React,{useEffect, useState} from 'react'

function ExtarctUpcomingEvents() {
    const [events,setEvents] = useState([])
    const [err,setError] = useState('')
    useEffect(()=>{
        axios.get("http://localhost:9000/events/active")
        .then(response=>{
            setEvents(response.data)
        })
        .catch(err=>{
            setError('Error')
        })
    },[])
    return (
        events
    )
}

export default ExtarctUpcomingEvents
