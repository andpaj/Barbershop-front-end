import axios from 'axios';
import authHeader from './auth-header';



class UserService {


    getHeader() {
        let head = authHeader();
        let header = {
            'Content-Type': 'application/json',
            'Authorization': head
        };
        return header;
    }
    getPublicContent() {
        return axios.get( 'all');
    }

    getUserBoard() {
        return axios.get('/services/findall', { headers: authHeader() });
    }

    getAdminAddServ() {
        return axios.get('/services/create', { headers: authHeader() });
    }
}

export default new UserService();
