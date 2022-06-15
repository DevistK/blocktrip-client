import axios , {AxiosInstance}from 'axios';

const request : AxiosInstance = axios.create({
    baseURL: 'http://blocktrip.com/api',
});

request.defaults.timeout = 1000;

request.interceptors.request.use(
    config =>{
        console.log('before event..');
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

request.interceptors.response.use(
    response=>{
        return response;
    },
    error =>{
        console.log(error)
        return Promise.reject(error);
    }
)

export default request;