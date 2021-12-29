import React, { useEffect, useState } from 'react'
import "./allEvents.css"
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AllEvents() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:9000/allevents")
        .then(response=>{
            setData(response.data)
        })
        .catch(err=>{
            alert("Error")
        })
    },[])
    const columns = [
        { field: 'id', headerName: 'S.NO', width: 90  },
        { field: 'event_name', headerName: 'Event name', width: 170 },
        { field:'Admin' , headerName:'Created By',width:130},
        { field: 'event_type_name', headerName: 'Event Type', width: 130 },
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
                console.log("--->"+JSON.stringify(params.row))
                return(
                        <Link to={"/view/event"} state={params.row}>
                            <button className='eventListEdit'>View</button>
                        </Link>
                )
            }
          }
      ];
    return (
        <div className='allEvents'>
            <h1>All Events</h1>
            <div style={{ height: 500, width: '100%', marginTop:10 }}>
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

export default AllEvents
