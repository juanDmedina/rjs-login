import axios from 'axios';

const baseURL = process.env.REACT_APP_URL_API;

const loginApi = axios.create({ baseURL });


export default loginApi
