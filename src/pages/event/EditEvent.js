import React,{useEffect,useState,useContext} from 'react'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { EventContext } from './EventDetails'

function EditEvent() {
    const navigate = useNavigate()
    const user = useContext(UserContext)
    const event_details = useContext(EventContext)
    const [event,setEvent] = useState(event_details)
    const [errors,setErrors] = useState({})
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
            errors.event_type_name = "Event Type is required"
        }
        if (!values.date) {
          errors.date = "Email is required!";
        } else if (!(new Date(values.date)-new Date >=0)) {
          errors.date = "This is not a valid Date!";
        }
        return errors;
      };
    const changeHandler = e =>{
        setEvent({...event,[e.target.name]:e.target.value})
        setErrors({...errors,[e.target.name]:''})
    }
    return (
        <div>
                <div className='editEventItem'>
                    <label>Event Name</label>
                    <input type='text' placeholder='' name='event_name' value={event.event_name} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.event_name}</p>
                </div>
                
                <div className='editEventItem'>
                    <label>Event type </label>
                    <input type='text' placeholder='' name="event_type" value={event.event_type_name} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.event_type_name}</p>
                </div>
                
                <div className='editEventItem'>
                    <label>Date </label>
                    <input type='date' placeholder='' name="date" value={event.date} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.date}</p>
                </div>
                
                <div className='editEventItem'>
                    <label>Duration </label>
                    <input type='text' placeholder='' name='duration' value={event.duration} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.duration}</p>
                </div>
                
                <div className='editEventItem'>
                    <label>Credits </label>
                    <input type='text' placeholder='' name='credits' value={event.credits} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.credits}</p>
                </div>
                
                <div className='editEventItem'>
                    <label>Location</label>
                    <input type='text' placeholder='' name='location' value={event.location} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.location}</p>
                </div>
                
                <div className='editEventItem Desc'>
                    <label>Event Description</label>
                    <input type='text' placeholder='' name='event_desc' value={event.event_desc} onChange={changeHandler} disabled={event.is_complete}/>
                    <p className='error'>{errors.event_desc}</p>
                </div>
                <div className='buttonItem'>
                    <button className='editEventButton' disabled={event.is_complete}>Edit</button>
                    <button className='deleteEventButton'>Delete</button>
                </div>
        </div>
    )
}

export default EditEvent
