import axios from 'axios';
import { getAccessToken } from './authentication';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: 'https://192.168.8.102:5454',
        timeout: 5000,
    });

    instance.defaults.headers.common['Auth-Token'] = getAccessToken();

    return instance;
}