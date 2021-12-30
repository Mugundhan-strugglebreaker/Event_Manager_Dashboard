import React, { useContext } from 'react'
import './sidebar.css'
import {LineStyle,Timeline,Person,Event,History,NotificationsActive,Message, EventNote} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
function Sidebar() {
    const userDetails = useContext(UserContext)
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to="/" className='link'>
                            <li className='sidebarListItem active'>
                                <LineStyle className='sidebarIcon'/>
                                Home
                            </li>
                        </Link>
                        <Link to="/profile" className='link'>
                            <li className='sidebarListItem'>
                                <Person className='sidebarIcon'/>
                                Profile
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to="/events" className='link'>
                            <li className='sidebarListItem '>
                                <Event className='sidebarIcon'/>
                                Event
                            </li>
                        </Link>
                        <Link to="/allevents" className='link'>
                            <li className='sidebarListItem'>
                                <EventNote className='sidebarIcon'/>
                                All Events
                            </li>
                        </Link>
                        <Link to="/volunteers" className='link'>
                            <li className='sidebarListItem'>
                                <Person className='sidebarIcon'/>
                                Volunteers
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    
                        {
                            (userDetails.role==='A')? (
                            <>
                                <h3 className='sidebarTitle'>Notifications</h3>
                                <ul className='sidebarList'>
                                    <Link to='/requests' className='link'>
                                        <li className='sidebarListItem '>
                                            <NotificationsActive className='sidebarIcon'/>
                                            Requests
                                        </li>
                                    </Link>
                                </ul>
                            </>
                            ):null
                        }
                        
                    
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar
