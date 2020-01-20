import axios from 'axios';
import { getAccessToken } from './authentication';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: 'http://backend.menuplate.pt:9001',
        timeout: 5000,
    });

    instance.defaults.headers.common['Auth-Token'] = getAccessToken();

    return instance;
}