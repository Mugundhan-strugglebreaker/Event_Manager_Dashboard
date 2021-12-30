import React, { useContext, useEffect, useState } from 'react'
import "./request.css"
import { DataGrid } from '@mui/x-data-grid';
import { UserContext } from '../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Request() {
    const navigate = useNavigate()
    const UserDetails = useContext(UserContext)
    const [data,setData] = useState()
    const [feedback,setFeedback] = useState([])
    const [loadStatus,setLoadStatus] = useState(false)
    const [errors,setErrors] = useState({})
    // const data = [
    //     {
    //         'id':1,
    //         'event_name':'Node Js Learning',
    //         'date':'2021-12-30',
    //         'credits':30,
    //         'emp_name':'Mugundhan'
    //     },
    //     {
    //         'id':2,
    //         'event_name':'Node Js Learning',
    //         'date':'2021-12-30',
    //         'credits':30,
    //         'emp_name':'Mathumita'
    //     }

    // ]
  
    const acceptHandler = (details)=>{
      // details.preventDefault()
      // alert(JSON.stringify(details))
      axios.post("http://localhost:9000/request/accept",{
         "event_history_details_id":details.event_history_details_id,
         "credits":details.credits
       }).then(response=>{
          setLoadStatus(!loadStatus)
       }).catch(err=>{
         alert("Error")
       })
    }
    const rejectHandler = (details,e)=>{
      e.preventDefault()
        axios.post("http://localhost:9000/request/reject",{
          "event_history_details_id":details.event_history_details_id,
          "feedback_id":details.feedback_id,
          "feedback":feedback[details.id]
        }).then(response=>{
            setLoadStatus(!loadStatus)
        }).catch(err=>{
          alert("Error")
        })
      
    }
    useEffect(()=>{
       if(Object.keys(UserDetails).length!==0){
        axios.get("http://localhost:9000/requestlist/get/"+UserDetails.emp_id)
        .then(response=>{
          setData(response.data)
        })
        .catch(err=>{
          alert('Error'+err)
        })
      }
    },[UserDetails,data,loadStatus])
    const columns = [
        { field: 'id', headerName: 'S.NO', width: 90  },
        { field: 'event_name', headerName: 'Event name', width: 150 },
        {
          field: 'date',
          headerName: 'Date',
          width: 100,
        },
          {
            field: 'credits',
            headerName: 'Credits',
            type: 'number',
            width: 90,
          }
          ,
          {
            field: 'emp_name',
            headerName: 'Volunteer Name',
            width: 150,
          },
          {
            field:'accept',
            headerName:'Accept',
            width : 90,
            renderCell:(params)=>{
                return(
                            // <Link to={"/event/view/"+params.row.event_id} state={params.row}>
                              <button className='acceptRequestButton' onClick={()=>{acceptHandler(params.row)}}>Accept</button>
                            // </Link>
                )
            }
          },
          {
            field:'reject',
            headerName:'Reject',
            width : 380,
            renderCell:(params)=>{
                return(
                            // <Link to={"/event/view/"+params.row.event_id} state={params.row}>
                            <form onSubmit={(e)=>rejectHandler(params.row,e)}>
                            <>
                               <div className='rejectForm'>
                                    <input type='text' value={feedback[params.row.id]} name='feedback' onChange={(e)=>setFeedback({...feedback,[params.row.id]:e.target.value})} required/>
                                    <button className='rejectRequestButton'>Reject</button>
                               </div> 
                               <p className='errorFeedback'>{errors.feedback}</p>
                            </>
                           </form>
                            // </Link>
                )
            }
          }
      ];
    return (
        <div className='request'>
            <h1>Request List</h1>
            <div style={{ height: 500, width: '97%', marginTop:10 , marginRight:20 }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        disableSelectionOnClick
                        // checkboxSelection
                    />
            </div>
        </div>
    )
}

export default Request
