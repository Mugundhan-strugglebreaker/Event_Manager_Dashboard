import React,{useState,useEffect, useContext} from 'react'
import './volunteer.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'

function Volunteers() {
    const userDetails = useContext(UserContext)
    const [user,setUser] = useState({})
    const [data,setData] = useState([])
    useEffect(()=>{
        setUser(userDetails)
        axios.get("http://localhost:9000/volunteers").then((response)=>{
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const columns = [
        {
            field: 'id',
            headerName: 'S.NO',
            width: 60
        },
        { 
            field: 'emp_name',
            headerName: 'Name', 
            width: 170
        },
        {   field: 'email',
            headerName: 'Mail ID',
            width: 200
        },
        {
          field: 'phone_number',
          headerName: 'Phone number',
          width: 130,
        },
        {
            field: 'dept',
            headerName: 'Department',
            width: 250,
        },
        {
            field: 'credits',
            headerName: 'Credits gained',
            width: 250,
        }
        

      ];
    
    return (
        <div className='empList'>
            <div className='empTitleContainer'>
                <h1 className='empTitle'>Employees List</h1>
                
            </div>
            <div style={{ height: 500, width: '100%', marginTop:10 }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[10]}
                    // disableSelectionOnClick
                    // checkboxSelection
                    
                />
             </div>
        </div>
    )
}

export default Volunteers
