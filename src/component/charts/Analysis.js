import React, { useEffect, useState,useContext } from 'react'
import { LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';
import axios from 'axios'
import { UserContext } from '../../App';

function CustomTooltipForAttempts({ payload, label, active }) {
    console.log(payload)
    if (active && payload!==null) {
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
   console.log(payload)
    if (active && payload!==null) {
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
    console.log(payload)
    if (active && payload!==null) {
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
    const user = useContext(UserContext)
    const [userDetails,setUserDetails] = useState({});
    const [data,setData] = useState([])
    useEffect(()=>{
      if(user){
          setUserDetails({
              'role':user.role,
              'id':user.emp_id
          })
          axios.post("http://localhost:9000/chartinfo/get",{
              "role" : user.role,
              "id": user.emp_id
          }).then(response=>{
              setData(response.data)
          }).catch(err=>{
              console.log('Something went Wrong'+err)
          })
      }
  },[user])
    if(role==='A'){ 
        if(type==="Register"){
            return (
                <div>
                    <LineChart width={1000} height={250} data={data}>
                    <Line type="monotone" dataKey="noOfRegistered" stroke="#5550bd" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="noOfRegistered"/>
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                    <Tooltip content={<CustomTooltipForRegitered/>}/>
                </LineChart>
                </div>
            )
        }else{
            return(
                <div>
                    <LineChart width={1000} height={250} data={data}>
                        <Line type="monotone" dataKey="noOfAttempted" stroke="#5550bd" />
                        <XAxis dataKey="date"  />
                        <YAxis dataKey="noOfAttempted"/>
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                        <Tooltip content={<CustomTooltipForAttempts/>}/>
                    </LineChart>
                </div>
            )
        }
    }else{
        return(
            <div>
                <LineChart width={1000} height={250} data={data}>
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
