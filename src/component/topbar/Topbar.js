import React, { useContext, useEffect, useState } from 'react'
import './topbar.css'
import {NotificationsNone,Settings,AccountCircle, ExitToApp} from '@material-ui/icons';
import axios from 'axios';
import { UserContext } from '../../App';

function Topbar() {
    const UserDetails = useContext(UserContext)
    const [user,setUser] = useState({})
    const [notif,setNotif] = useState(0)

    useEffect(()=>{
        setUser(UserDetails)
        if(Object.keys(user).length !== 0){
        axios.get("http://localhost:9000/notif/" + user.emp_id).then(response =>{
            setNotif(response.data[0].notif)
        }).catch(err =>{
            console.log("error occured",err)

        })
    }

    },[UserDetails,user])
    const logout = ()=>{
        // alert("Logout")
        window.location.reload("/")
    }

    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topleft'>
                    <span className='logo'>Events Manager</span>
                </div>
                <div className='topRight'>
                    {
                        (user.role === 'A') ? (
                        <div>
                            <div className='topbarIconContainer'>
                                <NotificationsNone/>
                                <span className='topIconBadge'>{notif}</span>
                            </div>                       
                         </div>) : null
                    }
                    
                    <div className='topbarIconContainer'>
                        <ExitToApp onClick={logout} />
                    </div>
                    <div className='topbarIconContainer'>
                        <AccountCircle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
