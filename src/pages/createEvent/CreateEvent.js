import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import "./createEvent.css"


function CreateEvent() {
    const navigate = useNavigate()
    const user = useContext(UserContext)
    const [event,setEvent] = useState({
        event_name : '',
        event_desc:'',
        date:'',
        duration:'',
        credits:'',
        event_type:'',
        location:'',
        admin_id:user.emp_id
    })
    const [errors,setErrors] = useState({})
    const [isSubmit,setSubmit] = useState(false)
    const validate = (values) => {
        const errors = {};
        if (!values.event_name) {
          errors.event_name = "Event Name is required!";
        }
        if(!values.event_desc){
            errors.event_desc = "Event Description is required"
        }
        if(!values.duration){
            errors.duration = "Duration is required"
        }
        if(!values.location){
            errors.location = "Location is required"
        }
        if(!values.credits){
            errors.credits = "Credits is required"
        }
        if(!values.event_type){
            errors.event_type = "Event Type is required"
        }
        if (!values.date) {
          errors.date = "Date is required!";
        } else if (!(new Date(values.date)-new Date >=0)) {
          errors.date = "This is not a valid Date!";
        }
        return errors;
      };
    
    const submitHandler = (e)=>{
         e.preventDefault();
         console.log(JSON.stringify(event))
         setErrors(validate(event))
         setSubmit(true)
         //navigate("/events")
    }
    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmit){
            console.log("Inside")
            axios.post("http://localhost:9000/event/create",event)
            .then(response=>{
                navigate("/events")
            })
            .catch(err=>{
                alert('Error ',err)
                navigate("/events")
            })
        }
    },[errors])
    const changeHandler = e =>{
        setEvent({...event,[e.target.name]:e.target.value})
        setErrors({...errors,[e.target.name]:''})
    }
    return (
        <div className='createEvent'>
            <h1 className='createEventTitle'>Create Event</h1>
            <form className='createEventForm' onSubmit={submitHandler}>
                <div className='createEventItem'>
                    <label>Event Name</label>
                    <input type='text' placeholder='' name='event_name' value={event.event_name} onChange={changeHandler}/>
                    <p className='error'>{errors.event_name}</p>
                </div>
                
                <div className='createEventItem'>
                    <label>Event type </label>
                    <input type='text' placeholder='' name="event_type" value={event.event_type} onChange={changeHandler}/>
                    <p className='error'>{errors.event_type}</p>
                </div>
                
                <div className='createEventItem'>
                    <label>Date </label>
                    <input type='date' placeholder='' name="date" value={event.date} onChange={changeHandler}/>
                    <p className='error'>{errors.date}</p>
                </div>
                
                <div className='createEventItem'>
                    <label>Duration </label>
                    <input type='text' placeholder='' name='duration' value={event.duration} onChange={changeHandler}/>
                    <p className='error'>{errors.duration}</p>
                </div>
                
                <div className='createEventItem'>
                    <label>Credits </label>
                    <input type='text' placeholder='' name='credits' value={event.credits} onChange={changeHandler}/>
                    <p className='error'>{errors.credits}</p>
                </div>
                
                <div className='createEventItem'>
                    <label>Location</label>
                    <input type='text' placeholder='' name='location' value={event.location} onChange={changeHandler}/>
                    <p className='error'>{errors.location}</p>
                </div>
                
                <div className='createEventItem Desc'>
                    <label>Event Description</label>
                    <input type='text' placeholder='' name='event_desc' value={event.event_desc} onChange={changeHandler}/>
                    <p className='error'>{errors.event_desc}</p>
                </div>
                
                <button className='createEventButton'>Create</button>
            </form>
        </div>
    )
}

export default CreateEvent
