import axios from "axios";
import Cookies from 'js-cookie';
import { BASE_URL_API, LOGIN_UI_BASE_URL } from "../URLConstants";


const DESIGNATION_URL = BASE_URL_API+"/designation";

class DesignationService {


    
    ddAllDepartmentDetails() {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API+"/department")
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }       
    }


    getDesignationDetailsByPaging() {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API+"/designation/search?statusCd=A&page=0&size=200&sort=desig.desig_name")
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }      
    }


    getDesignationDetailsByDesigNamePaging(desigName) {
        if (null != Cookies.get('empId')) {
            return axios.get(BASE_URL_API+`/designation/search?desigName=${desigName}&statusCd=A&page=0&size=20&sort=desig.desigName`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }       
    }
    saveDesignationDetails(designation) {
        if (null != Cookies.get('empId')) {
            return axios.post(DESIGNATION_URL, designation)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }       
    }

    getDesignationById(desigId) {
        if (null != Cookies.get('empId')) {
            return axios.get(DESIGNATION_URL + `/by-desig-id?desigId=${desigId}`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }
    }

    updateDesignationDetails(designation) {
        if (null != Cookies.get('empId')) {
            return axios.put(DESIGNATION_URL, designation)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }
    }

    ddDesignationByDeptId(deptId) {
       
        if (null != Cookies.get('empId')) {
            return axios.get(DESIGNATION_URL + `/by-desig-dept?deptId=${deptId}`)
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }
    }

}

export default new DesignationService()