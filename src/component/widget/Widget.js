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
                {/* <tr className='widgetTr'>
                    <td className='widgetSNO'>
                        1
                    </td>
                    <td className='widgetEventName'>
                        React Js Learing
                    </td>
                    <td className='widgetEventType'>
                        Learning
                    </td>
                    <td className='widgetDate'>
                        20-12-2021
                    </td>
                    <td className='widgetDuration'>
                        8 Hours
                    </td>
                    <td className='widgetLocation'>
                        Online (Gmeet)
                    </td>
                    <td className='widgetCredits'>
                        150
                    </td>
                </tr> */}
                
            </table>
        </div>
    )
}

export default Widget
