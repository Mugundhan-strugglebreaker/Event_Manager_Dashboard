import React from 'react'
import './topbar.css'
import {NotificationsNone,Settings,AccountCircle} from '@material-ui/icons';

const noOfNotifications = 10
function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topleft'>
                    <span className='logo'>Events Manager</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone/>
                        <span className='topIconBadge'>{noOfNotifications}</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings/>
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
