import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./popup.css"

function Popup(props) {
    const navigate = useNavigate()
    const okClickHandler = ()=>{
        axios.post("http://localhost:9000/event/delete",{
            "event_id":props.event_id
        }).then(response=>{
            navigate("/events")
        }).catch(err=>{
            alert("Error",err)
        })
        //navigate("/events")
    }
    return (
        (props.trigger)?
        (
        <div className='popup'>
            <h3>Are you sure want to delete?</h3>
            <div className='popupButtonContainer'>
                <button className='okButton' onClick={okClickHandler}>Ok</button>
                <button onClick={()=>props.setPopup(false)} className='cancelButton'>Cancel</button>
            </div>
        </div>
        ):""
    )
}

export default Popup
