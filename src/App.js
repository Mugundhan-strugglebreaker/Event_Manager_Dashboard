import React, { useContext } from "react";
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

export const UserContext = React.createContext()

function App() {
  const user = UserDetails(3,'A')
  console.log("--->"+JSON.stringify(user));
  return (
    <Router>
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
                
                <Route exact path="/event/view/:id" element={<EventDetails/>}/>
                <Route exact path="/create/event" element={<CreateEvent/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
              </Routes>
             
            </div>
            
          
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
