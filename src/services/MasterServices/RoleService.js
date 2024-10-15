import axios from "axios";
import Cookies from 'js-cookie';
import { BASE_URL_API, LOGIN_UI_BASE_URL } from "./../URLConstants";

const BASE_URL=BASE_URL_API+"/roles";

class RoleService{

    
    getRolesDetailsByPaging(){
        return axios.get(BASE_URL_API+"/roles/search?page=0&size=20&sort=roleName")
        if (null != Cookies.get('custId')) {
            return axios.get(BASE_URL_API+"/roles/search?page=0&size=20&sort=roleName")
        } else {
            alert("You need to login first")
            window.location.replace(LOGIN_UI_BASE_URL);
        }  
    }
   
    
}

export default new RoleService();