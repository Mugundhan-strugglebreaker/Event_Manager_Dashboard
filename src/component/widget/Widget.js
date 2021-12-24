import React, { useContext } from 'react'
import { UserContext } from '../../App'
import UpcomingEvents from './UpcomingEvents'
import "./widget.css"


function Widget() {
    const user = useContext(UserContext)
    return (
        <div className='widget'>
            <h3 className='widgetTitle'>Upcoming Events</h3>
            <table className='widgetTable'> 
                <thead> 
                    <tr className='widgetTr'>
                        <th className='widgetTh'>
                            S.No
                        </th>
                        <th className='widgetTh'>
                            Event Name
                        </th>
                        <th className='widgetTh'>
                            Event Type
                        </th>
                        <th className='widgetTh'>
                            Date
                        </th>
                        <th className='widgetTh'>
                            Duration
                        </th>
                        <th className='widgetTh'>
                            Location
                        </th>
                        <th className='widgetTh'>
                            Credits
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <UpcomingEvents/>
                </tbody>
            </table>
        </div>
    )
}

export default Widget
