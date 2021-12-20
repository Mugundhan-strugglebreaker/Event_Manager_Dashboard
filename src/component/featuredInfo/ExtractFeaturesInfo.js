import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

function ExtractFeaturesInfo(id,role) {
    const user = useContext(UserContext)
    const [infoA,setInfoA]  = useState({})
    const [infoV,setInfoV] = useState({})
    useEffect(()=>{
        axios.post("http://localhost:9000/featuresinfo/get",{
            "role" : role,
            "id": id
        }).then(response=>{
            if(role==='A'){
                setInfoA(response.data)
            }else{
                setInfoV(response.data)
            }
        }).catch(err=>{
            console.log('Something went Wrong'+err)
        })
    },[])
    if(role==='A'){
        return infoA
    }else{
        return infoV
    }
}

export default ExtractFeaturesInfo
