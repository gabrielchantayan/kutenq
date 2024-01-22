import axios from "axios";
import config from "../../config.json";


let host = window.location.hostname 
let protocol = window.location.protocol 
// let port = config['AXIOS_API_PORT']
let port = ":2202"
// let port = ":80"

// Base API call
const baseURL = `${protocol}//${host}${port}/api/`

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

console.log(config)

// API get function
const get = (call) => {
    const request = axios.get(`${baseURL}${call.join('/')}`);
    return request.then(response => response.data.data);
}


// API get function
const post = (call, data) => {
    const request = axios.post(`${baseURL}${call.join('/')}`, data);
    return request.then(response => response.data.data);
}

export { get, post }