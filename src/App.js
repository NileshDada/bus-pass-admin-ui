import Cookies from 'js-cookie';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RoleComponent from './MasterComponents/RoleComponent';
import LanguageMasterComponent from './MasterComponents/LanguageMasterComponent';
import DocumentMasterComponent from './MasterComponents/DocumentMasterComponent';
import RoutesMasterComponent from './MasterComponents/RoutesMasterComponent';
import PassTypeMasterComponent from './MasterComponents/PassTypeMasterComponent';
import CustomerMasterComponent from './components/CustomerMasterComponent/CustomerMasterComponent';
import StudentPassMasterComponent from './components/StudentPassMasterComponent/StudentPassMasterComponent';
import SchoolInformationMasterComponent from './MasterComponents/SchoolInformationMasterComponent';
import BusStopMasterComponent from './MasterComponents/BusStopMasterComponent';

function App() {
  return (
    
    <BrowserRouter>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="http://localhost:3008" >FutureBizops</a>
          </div>

          
          <ul className="nav navbar-nav">

          <li><Link to="/customer">Customer Master</Link></li>
          <li><Link to="/studentpass">Student Pass Master</Link></li>  
            <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Master Records
              <span className="caret"></span></a>
            <ul className="dropdown-menu">
                      
            <li><Link to="/roles">Role Master</Link></li>
            <li><Link to="/langauge">Language Master</Link></li>
            <li><Link to="/routes">Routes Master</Link></li>
            <li><Link to="/busstop">Bus Stop Master</Link></li>
            <li><Link to="/passtype">Pass Type Master</Link></li>
            <li><Link to="/documents">Document Master</Link></li>
            <li><Link to="/employeekpp">Pass Type Document Master</Link></li>
            <li><Link to="/schoolinfo">School Information</Link></li>
            

            </ul>
          </li>


           

          

          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Welcome: {Cookies.get('custName')}</a></li>
            <li><a href="http://localhost:3002" >Logout</a></li>
          </ul>
        </div>
      </nav>
      <Routes>

        <Route exact path="/" ></Route>
        <Route exact path="/roles" element={<RoleComponent></RoleComponent>}></Route>
        <Route exact path="/langauge"  element={<LanguageMasterComponent></LanguageMasterComponent>}></Route>
        <Route exact path="/documents"  element={<DocumentMasterComponent></DocumentMasterComponent>}></Route>
        <Route exact path="/routes" element={<RoutesMasterComponent></RoutesMasterComponent>}></Route>
        <Route exact path="/busstop" element={<BusStopMasterComponent></BusStopMasterComponent>}></Route>
        
        <Route exact path="/passtype" element={<PassTypeMasterComponent></PassTypeMasterComponent>}></Route>
        <Route exact path="/customer"  element={<CustomerMasterComponent></CustomerMasterComponent>}></Route>
        <Route exact path="/studentpass" element={<StudentPassMasterComponent></StudentPassMasterComponent>}></Route>
        <Route exact path="/schoolinfo" element={<SchoolInformationMasterComponent></SchoolInformationMasterComponent>}></Route>

        <Route exact path="/meetingMaster" ></Route>
        <Route exact path="/updateDOB" ></Route>
        <Route exact path="/announcement" ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
