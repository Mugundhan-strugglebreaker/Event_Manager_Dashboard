import React,{useState,useEffect} from 'react'
import axios from 'axios';

function ExtractVoluteerStatus({value}) {
     const [volunteerStatus,setVolunteerStatus] = useState([])
     const [err,setError] = useState('')
     let i=1;
     useEffect(()=>{
        axios.get(`http://localhost:9000/event/regattempt/${value}`)
        .then(response=>{
            setVolunteerStatus(response.data)
        })
        .catch(err=>{
            setError('Error')
        })
    },[value])
    return (
        volunteerStatus.map( n=>{
            return(
                <tr className='viewEventTr' key={n.event_id}>
                        <td className='viewEventSNO'>
                            {i++}
                        </td>
                        <td className='viewEventVName'>
                            {n.emp_name}
                        </td>
                        <td className='viewEventStatus'>
                            {n.status}
                        </td>
                </tr>
            )
        })
    )
}

export default ExtractVoluteerStatus
