import axios from 'axios';

const baseURL = process.env.REACT_APP_URL_API;

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
