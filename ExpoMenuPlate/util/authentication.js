/*import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('access_token');
export const setAccessToken = (token) => Cookies.set('access_token', token);
export const isAuthenticated = () => !!getAccessToken();
export const destroyAccessToken = () => Cookies.remove('access_token');*/

import { AsyncStorage } from 'react-native';

export const getAccessToken = async () => {
    try {
        return await AsyncStorage.getItem('access_token')
    } catch (error) {
        return null;
    }
};

export const setAccessToken = async (token) => {
    try {
        await AsyncStorage.setItem('access_token', token);
    } catch (error) {
        return null;
    }
};

export const destroyAccessToken = async () => {
    try {
        await AsyncStorage.removeItem('access_token');
    } catch (error) {
        return null;
    }
};

export const isAuthenticated = async () => {
    const token = await getAccessToken();
    return token == null ? false : true;
};