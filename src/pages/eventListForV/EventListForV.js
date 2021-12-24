import React, { useContext, useEffect, useState } from 'react'
import "./eventListForV.css"
import { DataGrid } from '@mui/x-data-grid';
import { UserContext } from '../../App';
import axios from 'axios';

function EventListForV() {
    const userDetails = useContext(UserContext)
    const [user,setUser] = useState({})
    const [data,setData] = useState([])
    useEffect(()=>{
        setUser(userDetails)
        axios.post("http://localhost:9000/events/volunteer/get",{
            "emp_id":userDetails.emp_id
        }).then((response)=>{
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const columns = [
        { field: 'id', headerName: 'S.NO', width: 90  },
        { field: 'event_name', headerName: 'Event name', width: 150 },
        { field: 'event_type_name', headerName: 'Event Type', width: 130 },
        {field:'Admin',headerName:"Created By",width:100},
        {
          field: 'date',
          headerName: 'Date',
          width: 100,
        },
        {
            field: 'duration',
            headerName: 'Duration',
            type: 'number',
            width: 90,
          },
          {
            field: 'location',
            headerName: 'Location',
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
            field: 'status',
            headerName: 'Status',
            width: 100,
          },
          {
            field:'action',
            headerName:'Action',
            width : 90,
            renderCell:(params)=>{
                return(
                            <button className='eventListEdit'>View</button>
                )
            }
          }
      ];
    return (
        <div className='eventListForV'>
            <h1>Events</h1>
            <div style={{ height: 500, width: '97%', marginTop:10 , marginRight:20 }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        // disableSelectionOnClick
                        // checkboxSelection
                    />
            </div>
        </div>
    )
}

export default EventListForV
