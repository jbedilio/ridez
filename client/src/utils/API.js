import axios from 'axios';

export default {
    register: (userInfo) => {
        return axios.post('/api/auth/register', userInfo);
    },
    login: (userInfo) => {
        return axios.post('/api/auth/login', userInfo);
    },
    logout: () => {
        return axios.get('/api/auth/logout');
    }
};