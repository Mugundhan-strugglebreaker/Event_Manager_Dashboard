import React from 'react'
import { LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

const dt =[
    {
        event_id : 1,
        event_name : 'ABC',
        date : '18-12-2021',
        noOfRegitered : 4,
        noOfAttemps : 5,
        credits: 150,
        credits_gained : 120,
    },
    {
        event_id : 2,
        event_name : 'MKH',
        date : '19-12-2021',
        noOfRegitered : 3,
        noOfAttemps : 4,
        credits: 150,
        credits_gained : 110,
    },
    {
        event_id : 3,
        event_name : 'EFR',
        date : '20-12-2021',
        noOfRegitered : 2,
        noOfAttemps : 3,
        credits: 150,
        credits_gained : 0, 
    },
    {
        event_id : 4,
        event_name : 'GHI',
        date : '21-12-2021',
        noOfRegitered : 10,
        noOfAttemps : 7,
        credits: 150,
        credits_gained : 90, 
    },
    {
        event_id : 5,
        event_name : 'XYZ',
        date : '22-12-2021',
        noOfRegitered : 15,
        noOfAttemps : 9,
        credits: 150,
        credits_gained : 80, 
    }
]

function CustomTooltipForAttempts({ payload, label, active }) {
    // console.log(payload)
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Event Name: ${payload[0].payload.event_name}`}</p>
          <p className="desc">{`No of Attempts: ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  }
  
function CustomTooltipForRegitered({ payload, label, active }) {
    // console.log(payload)
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Event Name: ${payload[0].payload.event_name}`}</p>
          <p className="desc">{`No of Registration: ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  }
  function CustomTooltipForCreditsGained({ payload, label, active }) {
    // console.log(payload)
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Event Name: ${payload[0].payload.event_name}`}</p>
          <p className="desc">{`Credits Gained: ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  }
function Analysis({role,type}) {
    if(role==='A'){ 
        if(type==="Register"){
            return (
                <div>
                    <LineChart width={1000} height={250} data={dt}>
                    <Line type="monotone" dataKey="noOfRegitered" stroke="#5550bd" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="noOfRegitered"/>
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                    <Tooltip content={<CustomTooltipForRegitered/>}/>
                </LineChart>
                </div>
            )
        }else{
            return(
                <div>
                    <LineChart width={1000} height={250} data={dt}>
                        <Line type="monotone" dataKey="noOfAttemps" stroke="#5550bd" />
                        <XAxis dataKey="date"  />
                        <YAxis dataKey="noOfAttemps"/>
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                        <Tooltip content={<CustomTooltipForAttempts/>}/>
                    </LineChart>
                </div>
            )
        }
    }else{
        return(
            <div>
                <LineChart width={1000} height={250} data={dt}>
                        <Line type="monotone" dataKey="credits_gained" stroke="#5550bd" />
                        <XAxis dataKey="date"  />
                        <YAxis dataKey="credits_gained"/>
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                        <Tooltip content={<CustomTooltipForCreditsGained/>}/>
                    </LineChart>
            </div>
        )
    }
}

export default Analysis
