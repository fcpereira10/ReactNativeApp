import axios from 'axios';
import { getAccessToken } from '../utils/authentication';

export const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: 'https://localhost:5454',
        timeout: 5000,
    });

    instance.defaults.headers.common['Auth-Token'] = getAccessToken();

    return instance;
}