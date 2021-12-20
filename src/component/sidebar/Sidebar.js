import React from 'react'
import './sidebar.css'
import {LineStyle,Timeline,Person,Event,History,NotificationsActive,Message} from "@material-ui/icons"
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Person className='sidebarIcon'/>
                            Profile
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem '>
                            <Event className='sidebarIcon'/>
                            Event
                        </li>
                        <li className='sidebarListItem'>
                            <History className='sidebarIcon'/>
                            Event History
                        </li>
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
