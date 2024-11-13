import Axios from 'axios';

const token = localStorage.getItem('token');  

const apiClient = Axios.create({
    baseURL: 'http://localhost:2999/api',
    headers: {
        "x-token": token  
    }
});

export default apiClient;