import React,{useState,useEffect, useContext} from 'react'
import './eventList.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'

function EventList() {
    const userDetails = useContext(UserContext)
    const [user,setUser] = useState({})
    const [data,setData] = useState([])
    useEffect(()=>{
        setUser(userDetails)
        axios.post("http://localhost:9000/events/admin/get",{
            "id":userDetails.emp_id
        }).then((response)=>{
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const columns = [
        { field: 'id', headerName: 'S.NO', width: 90  },
        { field: 'event_name', headerName: 'Event name', width: 200 },
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
            width: 150,
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
                        <Link to={"/event/view/"+params.row.event_id} state={params.row}>
                            <button className='eventListEdit'>View</button>
                        </Link>
                )
            }
          }
      ];
    
    return (
        <div className='eventList'>
            <div className='eventsTitleContainer'>
                <h1 className='eventsTitle'>Events</h1>
                <Link to="/create/event">
                    <button className='eventAddButton'>Create</button>
                </Link>
            </div>
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

export default EventList
