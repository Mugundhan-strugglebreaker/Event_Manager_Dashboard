import React, { useContext } from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import Widget from "./component/widget/Widget";
import UserDetails from "./context/UserDetails";


export const UserContext = React.createContext()

function App() {
  //Mugundhan
  // const user1 = useContext(UserContext)
  // console.log(user1)
  const user =  UserDetails(2,'V')
  console.log("--->"+JSON.stringify(user));
  return (
    <UserContext.Provider value={user}>
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Home/>
        </div>
        
      </div>
    </UserContext.Provider>
  );
}

export default App;
