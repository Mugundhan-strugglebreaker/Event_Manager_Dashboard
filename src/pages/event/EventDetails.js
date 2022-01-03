import React,{useEffect, useState,useCallback} from 'react'
import "./event.css"
import { useLocation,useNavigate } from 'react-router';
import {CalendarToday, CardGiftcard, Category, Event, LocationOn, Schedule, Stars} from '@material-ui/icons';
import ExtractVoluteerStatus from './ExtractVoluteerStatus';
import axios from 'axios';
import Popup from './Popup';
export const EventContext = React.createContext()
function EventDetails(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const event_details = location.state
    console.log(event_details)
    const [event,setEvent] = useState(event_details)
    const [errors,setErrors] = useState({})
    const [isSubmit,setSubmit] = useState(false)
    const [showPopup,setPopup] = useState(false)
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("--->"+JSON.stringify(event))
        setErrors(validate(event))
        setSubmit(!isSubmit)
        //navigate("/events")
   }
   useCallback(
        useEffect(()=>{
            if(Object.keys(errors).length===0 && isSubmit){
                console.log("Mugundhan")
                axios.post("http://localhost:9000/event/update",event)
                .then(response=>{
                    navigate(`/events`)
                })
                .catch(err=>{
                    alert('Error',err)
                    navigate(`/events`)
                })
            }
    },[event,isSubmit])
   )
   
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
        if(!values.event_type_name){
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
        <div className='event'>
            <Popup trigger={showPopup} setPopup={setPopup} event_id={event.event_id}/>
            <div className='eventContainer'>
                <div className='editEvent'>
                    <div className='editDeleteContainer'>
                        <h1 className='editEventTitle'>Edit</h1>
                        <button className='deleteEventButton' onClick={()=>setPopup(true)} disabled={event.is_complete}>Delete</button>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className='editEventItem'>
                            <label>Event Name</label>
                            <div className='editEventtxt'>
                                <input type='text' placeholder='' name='event_name' value={event.event_name} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.event_name}</p>
                            </div>
                        </div>
                        
                        <div className='editEventItem'>
                            <label>Event type </label>
                            <div className='editEventtxt'>
                                <input type='text' placeholder='' name="event_type_name" value={event.event_type_name} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.event_type_name}</p>
                            </div>
                        </div>
                        
                        <div className='editEventItem'>
                            <label>Date </label>
                            <div className='editEventtxt'>
                                <input type='date' placeholder='' name="date" value={event.date} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.date}</p>
                            </div>
                        </div>
                        
                        <div className='editEventItem'>
                            <label>Duration </label>
                            <div className='editEventtxt'>
                                <input type='text' placeholder='' name='duration' value={event.duration} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.duration}</p>
                            </div>
                        </div>
                        
                        <div className='editEventItem'>
                            <label>Credits </label>
                            <div className='editEventtxt'>
                                <input type='text' placeholder='' name='credits' value={event.credits} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.credits}</p>
                            </div>
                        </div>
                        
                        <div className='editEventItem'>
                            <label>Location</label>
                            <div className='editEventtxt'>
                                <input type='text' placeholder='' name='location' value={event.location} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.location}</p>
                            </div>
                        </div>
                        
                        <div className='editEventItem Desc'>
                            <label>Event Description</label>
                            <div className='editEventtxt'>
                                <input type='text' placeholder='' name='event_desc' value={event.event_desc} onChange={changeHandler} disabled={event.is_complete}/>
                                <p className='error'>{errors.event_desc}</p>
                            </div>
                        </div>
                        <div className='buttonItem'>
                            <button className='editEventButton' disabled={event.is_complete}>Edit</button>
                        </div>
                    </form>
                    
                </div>
                <div className='viewEvent'>
                    <div className='viewEventTop'>
                        <div className='viewEventTopTitle'>
                            <div className='viewEventEventName'>
                                <Event/>
                                <span className='viewEventEventNametxt'>{event_details.event_name}</span>
                            </div>
                            <span className='viewEventEventDesc'>{event_details.event_desc}</span>
                        </div>
                        <div className='viewEventBottomTitle'>
                            <div className='viewEventInfo'>
                                <Category className='viewEventIcon'/>
                                <span className='viewEventInfotxt'>{event_details.event_type_name}</span>
                            </div>
                            <div className='viewEventInfo'>
                                <CalendarToday className='viewEventIcon'/>
                                <span className='viewEventInfotxt'>{event_details.date}</span>
                            </div>
                            <div className='viewEventInfo'>
                                <Schedule className='viewEventIcon'/>
                                <span className='viewEventInfotxt'>{event_details.duration} Hours</span>
                            </div>
                            <div className='viewEventInfo'>
                                <LocationOn className='viewEventIcon'/>
                                <span className='viewEventInfotxt'>{event_details.location}</span>
                            </div>
                            <div className='viewEventInfo'>
                                <CardGiftcard className='viewEventIcon'/>
                                <span className='viewEventInfotxt'>{event_details.credits} Points</span>
                            </div>
                            <div className='viewEventInfo'>
                                <Stars className='viewEventIcon'/>
                                {
                                    event_details.is_complete ? <span className='viewEventInfotxtT'>{event_details.status}</span> :
                                    <span className='viewEventInfotxtF'>{event_details.status}</span>
                                }
                                
                            </div>

                        </div>
                        <div className='viewEventRegAttempt'>
                            <table className='viewEventTable'> 
                                <thead> 
                                    <tr className='viewEventTr'>
                                        <th className='viewEventTh'>
                                            S.No
                                        </th>
                                        <th className='viewEventTh'>
                                            Volunteer Name
                                        </th>
                                        <th className='viewEventTh'>
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ExtractVoluteerStatus value={event_details.event_id}/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails
