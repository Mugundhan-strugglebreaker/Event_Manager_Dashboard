import { AccountCircle, CalendarToday, CardGiftcard, Category, EventAvailable, Favorite, Feedback, LocationOn, Schedule, Stars, ThumbUp, Whatshot } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import "./eventForV.css"

function EventForV() {
    const location = useLocation()
    const navigate = useNavigate()
    const event_details = location.state
    const [event,setEvent] = useState(event_details)
    const [feedback,setFeedback] = useState('')
    const [data,setData] = useState( {
        "ApprovedStatus": 1,
        "feedback_id": 2,
        "reaction_id": 0,
        "credits_gained": 0,
        "current_status": "Denied",
        "feedback": "You have not attended the event"
    }
    )
    useEffect(()=>{
        axios.post("http://localhost:9000/event/attemptdetails",{
            "event_history_id":event.event_history_id
        })
        .then(response=>{
            setData(response.data)
        })
        .catch(err=>{
            alert("error")
        })
    },[])
    const submitFeedbackHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:9000/event/participate",{
            "event_history_id":event.event_history_id,
            "feedback":feedback
        }).then(response=>{
            navigate("/events")
        }).catch(error=>{
            alert("error",error)
        })
        // alert(feedback)
    }
    const changeHandler = (e)=>{
        setFeedback(e.target.value)
    }
    return (
        <div className='eventForV'>
            <h1 className='eventForVTitle'>Event</h1>
            <div className='eventForVTitleContainer'>
                <div className='eventForVItemsContainer'>
                    <EventAvailable className='eventForVIcon'/>
                    <span className='eventForVTextEName'>{event.event_name}</span>
                </div>
                <div className='eventForVItemsContainer'>
                    <Category className='eventForVIcon'/>
                    <span className='eventForVText'>{event.event_desc}</span>
                </div>
                <div className='eventForVItemsContainer'>
                    <AccountCircle className='eventForVIcon'/>
                    <span className='eventForVText'>{event.Admin}</span>
                </div>
            </div>
            <div className='eventForVContainer'>
                <div className='eventForVItemsContainer'>
                    <CalendarToday className='eventForVIcon'/>
                    <span className='eventForVText'>{event.date}</span>
                </div>
                <div className='eventForVItemsContainer'>
                    <Schedule className='eventForVIcon'/>
                    <span className='eventForVText'>{event.duration} Hours</span>
                </div>
                <div className='eventForVItemsContainer'>
                    <LocationOn className='eventForVIcon'/>
                    <span className='eventForVText'>{event.location}</span>
                </div>
                <div className='eventForVItemsContainer'>
                    <CardGiftcard className='eventForVIcon'/>
                    <span className='eventForVText'>{event.credits} points</span>
                </div>
                <div className='eventForVItemsContainer'>
                    <Stars className='eventForVIcon'/>
                    <span className='eventForVText'>{event.status}</span>
                </div>
            </div>
            <div className='eventForVBottom'>
                {event.status==='Registered'?(
                    <div className='choosecontainer'>
                        <h1 className='choosecontainerTitle'>Participate</h1>
                        <form className='eventForVForm' onSubmit={submitFeedbackHandler}>
                            <div className='eventForVFormItem'>
                                    <label>Feedback</label>
                                    <input type='text' className='participateInput' value={feedback} onChange={changeHandler} required/>
                                    <button className='participateButton'>Participated</button>
                            </div>
                           
                        </form>
                    </div>
                )
                :
                    <div>
                        {
                            data.current_status==='Approved'?
                            (   <div> 
                                    <h2 style={{color:'darkblue',fontSize:'25'}}> <span className='award'> 🏆</span> You Got {data.credits_gained} Points</h2>
                                    <div className='emojiForVContainer'>
                                        <div className='emojiItem'>
                                            <Favorite className='emojiIcon'/>
                                            <span className='emojiCount'>{data.heart}</span>
                                        </div>
                                        <div className='emojiItem'>
                                            <ThumbUp className='emojiIconThumb' style={{ color:'black'}}/>
                                            <span className='emojiCount'>{data.thumbs_up}</span>
                                        </div>
                                        <div className='emojiItem'>
                                            <Whatshot className='emojiIcon'  style={{ color:'darkred'}}/>
                                            <span className='emojiCount'>{data.fire}</span>
                                        </div>
                                        <div className='emojiItem'>
                                            &#128514;
                                            <span className='emojiCount'>{data.lol}</span>
                                        </div>
                                    </div>
                                    <div className='bottom'>
                                                <Feedback fontSize='medium'/>
                                                <label>Your Feedback </label>        
                                    </div>
                                    <div className='feedback'>
                                        {data.feedback}
                                    </div>
                                </div>
                                
                                ):null
                        }
                        {
                            data.current_status==='Not Approved' ?( 
                            
                                <div >
                                    <div className='notApproved'>
                                        <h2>Status:</h2>
                                        <h3>Attempted but Not yet Approved By Admin!!!</h3>
                                    </div>
                                </div>
                                ):null
                        }
                        {
                            data.current_status==='Denied' ? (
                            <div>
                                <div className='denied'>
                                    <h2>Status:</h2>
                                    <h3>Denied By Admin</h3>
                                </div>
                                <div className='deniedBottom'>
                                    <div className='deniedBottomTitle'>
                                        <Feedback/>
                                        <h3>Feedback of Admin :</h3>
                                    </div>
                                    <div className='deniedFeedback'>
                                        {data.feedback}
                                    </div>
                                </div>
                            </div>
                            ):null
                        }
                        {/* <h1>Attempted</h1>
                        <h1>Attempted</h1>
                        <h1>Attempted</h1>
                        <h1>Attempted</h1> */}
                    </div>
                }
            </div>
        </div>
    )
}

export default EventForV
