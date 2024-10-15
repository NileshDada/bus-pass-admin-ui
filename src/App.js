import Cookies from 'js-cookie';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RoleComponent from './MasterComponents/RoleComponent';

function App() {
  return (
    
    <BrowserRouter>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="http://localhost:3008" >FutureBizops</a>
          </div>

          
          <ul className="nav navbar-nav">

          <li><Link to="/announcement">Customer Master</Link></li>
          <li><Link to="/announcement">Customer Psss Master</Link></li>  
            <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Master Records
              <span className="caret"></span></a>
            <ul className="dropdown-menu">
                      
            <li><Link to="/roles">Role Master</Link></li>
            <li><Link to="/employeekpp">Language Master</Link></li>
            <li><Link to="/employeekpp">Routes Master</Link></li>
            <li><Link to="/viewKppReport">Bus Stop Master</Link></li>
            <li><Link to="/employeekpp">Pass Type Master</Link></li>
            <li><Link to="/employeekpp">Document Master</Link></li>
            <li><Link to="/employeekpp">Pass Type Document Master</Link></li>

            </ul>
          </li>


           

          

          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Welcome: {Cookies.get('empEId')}</a></li>
            <li><a href="http://localhost:3002" >Logout</a></li>
          </ul>
        </div>
      </nav>
      <Routes>

        <Route exact path="/" ></Route>
        <Route exact path="/roles" element={<RoleComponent></RoleComponent>}></Route>
        <Route exact path="/viewKppReport" ></Route>
        <Route exact path="/updateEmployeeProfile" ></Route>
        <Route exact path="/changePassword"></Route>
        <Route exact path="/myComplaint"></Route>
        <Route exact path="/othersPendingComplaint" ></Route>
        <Route exact path="/othersInProgressComplaint" ></Route>
        <Route exact path="/othersResolveComplaint"></Route>

        <Route exact path="/meetingMaster" ></Route>
        <Route exact path="/updateDOB" ></Route>
        <Route exact path="/announcement" ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
