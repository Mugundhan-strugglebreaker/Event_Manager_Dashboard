import React, { useContext } from 'react'
import { UserContext } from '../../App'
import Analysis from './Analysis'
import AttemptAnalysis from './AttemptAnalysis'
import './charts.css'
import RegisterAnalysis from './RegisterAnalysis'
function Charts() {
    const user = useContext(UserContext)
    const role = user.role
    if(role==='A'){
        return (
            <div>
                <div className='charts'>
                    <h3 className='chartTitle'>Registered Analysis</h3>
                    <Analysis type="Register" role="A"/>
                </div>
                <div className='charts'>
                    <h3 className='chartTitle'>Attender Analysis</h3>
                    <Analysis type="Attempt" role="A" />
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <div className='charts'>
                    <h3 className='chartTitle'>Credit Analysis</h3>
                    <Analysis type="Credits" role="V"/>
                </div>
            </div>
        )
    }
}

export default Charts
