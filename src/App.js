import React, { useContext, useState } from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import Widget from "./component/widget/Widget";
import UserDetails from "./context/UserDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import EventList from "./pages/eventList/EventList";
import EventDetails from "./pages/event/EventDetails";
import CreateEvent from "./pages/createEvent/CreateEvent";
import Profile from "./pages/profile/Profile";
import EventListForV from "./pages/eventListForV/EventListForV";
import EventForV from "./pages/eventForV/EventForV";
import AllEvents from "./pages/allEvents/AllEvents";
import ChangeEventStatus from "./pages/allEvents/ChangeEventStatus";
import ViewEventForReg from "./pages/viewEventForReg/ViewEventForReg";
import Login from "./pages/login/Login";

export const UserContext = React.createContext()

function App() {
  // const [user,setUser] = useState()
  const [user,setUser] = useState({
    "emp_id":0,
    "role":""
  })
  const login = (details)=>{
    console.log("App-->"+JSON.stringify(details))
    
    setUser(details[0])
    
  }
  // const user = UserDetails(2,'V')
  // console.log("--->"+JSON.stringify(user));
  return (
    <>
    {
       (user.emp_id)!==0?(

        <Router>
        <ChangeEventStatus/>
        <div>
          <UserContext.Provider value={user}>
              <Topbar/>
              <div className="container">
                <Sidebar/>
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  {
                     user.role === "A" ? <Route exact path="/events" element={<EventList/>}/>:
                     <Route exact path="/events" element={<EventListForV/>}/>
                  }
                  {
                    user.role === "A" ? <Route exact path="/event/view/:id" element={<EventDetails/>}/>:
                    <Route exact path="/event/view/:id" element={<EventForV/>}/>
                  }
                  
                  <Route exact path="/create/event" element={<CreateEvent/>}/>
                  <Route exact path="/profile" element={<Profile/>}/>
                  <Route exact path="/allevents" element={<AllEvents/>}/>
                  <Route exact path="/view/event" element={<ViewEventForReg/>}/>
                  <Route exact path="/login" element={<Login/>}/>
                </Routes>
               
              </div>
              
            
          </UserContext.Provider>
        </div>
      </Router>

       ): <Login login={login}/>
    }
    </>
    
  );
}

export default App;
