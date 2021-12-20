import React, { useContext, useEffect, useState } from 'react'
import { Event,Redeem,EventAvailable } from '@material-ui/icons'
import { UserContext } from '../../App'
import axios from 'axios'
import ExtractFeaturesInfo from './ExtractFeaturesInfo'
let noOfEventsCreated = 3
let credits = 70
let creditsGained = 600
let noOfEventAttempted = 4
let noOfEventRegistered = 3

function ChooseUser() {
    const user = useContext(UserContext)
    const [userDetails,setUserDetails] = useState({});
    const [info,setInfo] = useState({})
    let role = userDetails.role
    useEffect(()=>{
        if(user){
            setUserDetails({
                'role':user.role,
                'id':user.emp_id
            })
            axios.post("http://localhost:9000/featuresinfo/get",{
                "role" : user.role,
                "id": user.emp_id
            }).then(response=>{
                setInfo(response.data)
            }).catch(err=>{
                console.log('Something went Wrong'+err)
            })
        }
    },[user])
    if(role==='A'){
        // const [count,credits] = info
        return(
            <div className='featured'>
                <div className='featuredItem'>
                    <span className='featuredTitle'>Events Created Yet</span>
                    <div className='featuredContainer'>
                        <Event className='featuredIcon'/>
                        <span className='eventsCreated'>{info.count}</span>
                    </div>
                </div>
                <div className='featuredItem'>
                    <span className='featuredTitle'>Credits Posted Yet</span>
                    <div className='featuredContainer'>
                        <Redeem className='featuredIcon'/>
                        <span className='eventsCreated'>{info.credits}</span>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className='featured'>
                <div className='featuredItem'>
                    <span className='featuredTitle'>Events Registered</span>
                    <div className='featuredContainer'>
                        <Event className='featuredIcon'/>
                        <span className='eventsCreated'>{noOfEventRegistered}</span>
                    </div>
                </div>
                <div className='featuredItem'>
                    <span className='featuredTitle'>Events Attempted</span>
                    <div className='featuredContainer'>
                        <EventAvailable className='featuredIcon'/>
                        <span className='eventsCreated'>{noOfEventAttempted}</span>
                    </div>
                </div>
                <div className='featuredItem'>
                    <span className='featuredTitle'>Credits Gained</span>
                    <div className='featuredContainer'>
                        <Redeem className='featuredIcon'/>
                        <span className='eventsCreated'>{creditsGained}</span>
                    </div>
                </div>
            </div>
        )

    }
}

export default ChooseUser
