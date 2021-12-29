import React from 'react'
import './sidebar.css'
import {LineStyle,Timeline,Person,Event,History,NotificationsActive,Message, EventNote} from "@material-ui/icons"
import { Link } from 'react-router-dom'
function Sidebar() {
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
                        {/* <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li> */}
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
                        <li className='sidebarListItem'>
                            <Person className='sidebarIcon'/>
                            Volunteers
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem '>
                            <NotificationsActive className='sidebarIcon'/>
                            Requests
                        </li>
                        <li className='sidebarListItem'>
                            <Message className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar
