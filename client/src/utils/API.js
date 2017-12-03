import axios from 'axios';

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=5";

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
        return axios.get('/api/ridez');
    },
    // Gets one with the given id
    getRidez: function (id) {
        return axios.get('/api/ridez/' + id);
    },
    // Deletes one with the given id
    deleteRidez: function (id) {
        return axios.delete('/api/ridez/' + id);
    },
    // Saves one to the database
    save: function (rideData) {
        return axios.post('/api/ridez', rideData);
    },
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY)
    }
};

// apiKey: 'AIzaSyCkcPoiLVUqMM83b_oUYhgABQbWjv5-_5E'