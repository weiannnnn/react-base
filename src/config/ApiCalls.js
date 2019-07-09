import axios from 'axios';
import { api1 } from './Endpoints';
const queryString = require('query-string');

// Headers
const postHeader = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

const getHeader = {
    'Accept': 'application/json'
}

// APIs
export const getAPI = () => {
    return axios.get(api1)
        .catch((error) => {
            console.error('error', JSON.stringify(error));
        });
}