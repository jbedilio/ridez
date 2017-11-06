import * as axios from 'axios';

export default {
    register: function(userData) {
        return axios.post('/api/auth/register', userData);
    },
    login: function(userData) {
        return axios.post('/api/auth/login', userData);
    },
    logout: function() {
        return axios.get('/api/auth/logout');
    },
    // Gets all
    getAllRidez: function () {
        return axios.get("/api/ridez");
    },
    // Gets one with the given id
    getRidez: function (id) {
        return axios.get('/api/ridez/', id);
    },
    // Deletes one with the given id
    deleteRidez: function (id) {
        return axios.post('/api/ridez/', id);
    },
    // Saves one to the database
    save: function (ridezData) {
        return axios.post("/api/ridez", ridezData);
    },
};