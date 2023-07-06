import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export default instance;