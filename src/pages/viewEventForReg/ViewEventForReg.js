import React, { useContext, useEffect, useState } from 'react'
import { AccountCircle, CalendarToday, CardGiftcard, Category, EmojiEmotions, EventAvailable, Favorite, Feedback, LocationOn, Schedule, Stars, ThumbUp, Whatshot } from '@material-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import "./viewEventForReg.css"
import {UserContext} from '../../App'
import axios from 'axios';

function ViewEventForReg() {
    const navigate = useNavigate()
    const user_details = useContext(UserContext);
    const [user,setUser] = useState(user_details)
    const location = useLocation()
    const [event,setEvent] = useState(location.state)
    const [data,setData] = useState([])
    const [regStatus,setRegStatus] = useState()
    const [click,setClick] = useState(false)
    useEffect(()=>{
        axios.post("http://localhost:9000/event/participatedetails/get",{
            "emp_id":user_details.emp_id,
            "event_id":event.event_id
        })
        .then(response=>{
            // setData(response.data)
            console.log(response.data[0])
            setRegStatus(response.data[0].regStatus)
            setData([...response.data.slice(1)])
            console.log("Mugundhan--->"+JSON.stringify(data)+" "+regStatus)

        })
        .catch(error=>{
            alert("Error " + error)
        })
    },[click])
    const registerEventHandler = e =>{
        e.preventDefault()
        axios.post("http://localhost:9000/event/register",{
            "emp_id":user.emp_id,
            "event_id":event.event_id
        }).then(response=>{
            setClick(!click)
        }).catch(err=>{
            alert("Error",err)
        })
    }
    const emojiCountHandler = (params,emoji)=>{
        axios.post("http://localhost:9000/makereaction",{
            "reaction_id":params.row.reaction_id,
            "emoji":emoji
        }).then(response=>{
            setClick(!click)
        }).catch(err=>{
            alert("Error",err)
        })
    }
    const columns = [
        { field: 'id', headerName: 'S.NO', width: 90  },
        { field: 'emp_name', headerName: 'Volunteer Name', width: 200 },
        { field: 'credits_gained', headerName: 'Credits', width: 130 },
        {
          field: 'heart',
          headerName: 'Heart',
          width: 100,
          renderCell:(params)=>{
            return(
                    <div className='emojiContainer'>
                        <Favorite onClick={()=>emojiCountHandler(params,'heart')} style={{cursor:'pointer'}} className='heartIcon'/>
                         <span>{params.row.heart}</span>
                    </div>
            )
        }
        },
        {
            field: 'thumbs_up',
            headerName: 'Thumbs_up',
            width: 140,
            renderCell:(params)=>{
                return(
                        <div className='emojiContainer'>
                            <ThumbUp onClick={()=>emojiCountHandler(params,'thumbs_up')} style={{cursor:'pointer'}}/>
                            <span>{params.row.thumbs_up}</span>
                        </div>
                )
            }
          },
          {
            field: 'lol',
            headerName: 'Lol',
            width: 70,
            renderCell:(params)=>{
                return(
                        <div className='emojiContainer'>
                            <EmojiEmotions className='lolIcon' onClick={()=>emojiCountHandler(params,'lol')} style={{cursor:'pointer'}}/>
                            <span>{params.row.lol}</span>
                        </div>
                )
            }
          },
          {
            field: 'fire',
            headerName: 'Fire',
            width: 90,
            renderCell:(params)=>{
                return(
                        <div className='emojiContainer'>
                             <Whatshot className='fireIcon' onClick={()=>emojiCountHandler(params,'fire')} style={{cursor:'pointer'}}/>
                             <span>{params.row.fire}</span>
                        </div>
                    
                )
            }
          }
          ,
          {
            field: 'feedback',
            headerName: 'feedback',
            width: 200,
          }
      ];
    return (
        <div className='viewEventForReg'>
            <div className='viewEventTitleContainer'>
                <h1 className='eventTitle'>View Event</h1>
                {
                    user.role === 'V' && (!event.is_complete) && regStatus===0 ? <button className='eventRegButton' onClick={registerEventHandler}>Register</button> : null
                }
                {
                    regStatus === 1 ? <h3>Registered</h3>:null
                }
                {
                    regStatus === 2 ? <h3>Attended</h3>:null
                }
                
            </div>
            <div className='eventTitleContainer'>
                <div className='eventItemsContainer'>
                    <EventAvailable className='eventIcon'/>
                    <span className='eventTextEName'>{event.event_name}</span>
                </div>
                <div className='eventItemsContainer'>
                    <Category className='eventIcon'/>
                    <span className='eventText'>{event.event_desc}</span>
                </div>
                <div className='eventItemsContainer'>
                    <AccountCircle className='eventIcon'/>
                    <span className='eventText'>{event.Admin}</span>
                </div>
            </div>
            <div className='eventContainer'>
                <div className='eventItemsContainer'>
                    <CalendarToday className='eventIcon'/>
                    <span className='eventText'>{event.date}</span>
                </div>
                <div className='eventItemsContainer'>
                    <Schedule className='eventIcon'/>
                    <span className='eventText'>{event.duration} Hours</span>
                </div>
                <div className='eventItemsContainer'>
                    <LocationOn className='eventIcon'/>
                    <span className='eventText'>{event.location}</span>
                </div>
                <div className='eventItemsContainer'>
                    <CardGiftcard className='eventIcon'/>
                    <span className='eventText'>{event.credits} points</span>
                </div>
                <div className='eventItemsContainer'>
                    <Stars className='eventIcon'/>
                    <span className='eventText'>{event.status}</span>
                </div>
            </div>
            <div style={{ height: 250, width: '100%', marginTop:10 }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[3]}
                    disableSelectionOnClick
                    // checkboxSelection
                />
             </div>
             {/* <button onClick={clickHandler}>Click me</button> */}
        </div>
    )
}

export default ViewEventForReg
