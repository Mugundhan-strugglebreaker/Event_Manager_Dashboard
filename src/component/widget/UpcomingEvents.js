import axios from 'axios';
import React from 'react'
import ExtarctUpcomingEvents from './ExtarctUpcomingEvents';
// const data=[
//     {
//         event_id:1,
//         event_name: 'React Js Learning',
//         event_type: 'Learning',
//         date:'2021-12-20',
//         duration:8,
//         credits:10,
//         location:'Online(Gmeet)'
//     },
//     {
//         event_id:2,
//         event_name: 'Blood donation camp',
//         event_type: 'Social Service',
//         date:'2021-12-24',
//         duration:3,
//         credits:30,
//         location:'Chennai'
//     },
//     {
//         event_id:3,
//         event_name: 'Beach Cleaning',
//         event_type: 'Social Service',
//         date:'2021-12-18',
//         duration:3,
//         credits:30,
//         location:'Chennai'
//     }
// ]
function UpcomingEvents() {
    let i=1;
    const data = ExtarctUpcomingEvents() 
    console.log(data);
    return (
        data.filter(d => new Date(d.date) - new Date() >= 0 ).map( n=>{
            return(
                <tr className='widgetTr' key={n.event_id}>
                        <td className='widgetSNO'>
                            {i++}
                        </td>
                        <td className='widgetEventName'>
                            {n.event_name}
                        </td>
                        <td className='widgetEventType'>
                            {n.event_type}
                        </td>
                        <td className='widgetDate'>
                            {n.date}
                        </td>
                        <td className='widgetDuration'>
                            {n.duration}
                        </td>
                        <td className='widgetLocation'>
                            {n.location}
                        </td>
                        <td className='widgetCredits'>
                            {n.credits}
                        </td>
                </tr>
            )
        })
    )
}

export default UpcomingEvents
