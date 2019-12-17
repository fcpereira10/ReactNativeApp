import axios from 'axios';
import { getAccessToken } from './authentication';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: 'http://10.0.2.2:5454',
        timeout: 5000,
    });

    instance.defaults.headers.common['Auth-Token'] = getAccessToken();

    return instance;
}