import axios from 'axios';

const baseURL = 'http://192.168.1.75:8080/api';

const loginApi = axios.create({ baseURL });

loginApi.interceptors.request.use(
    async(config) => {
        const token =  JSON.parse(localStorage.getItem('token')!);
        if ( token ) {
            config.headers['x-token'] = token;
        }
        return config;
    }
);



export default loginApi
