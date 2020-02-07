import { AsyncStorage } from 'react-native';

export const getAccessToken = async () => {
    try {
        return await AsyncStorage.getItem('access_token')
    } catch (error) {
        return null;
    }
};

export const setAccessToken = async (token, payload) => {
    try {
        await AsyncStorage.setItem('access_token', token);
        await AsyncStorage.setItem('payload', JSON.stringify(payload));
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const destroyAccessToken = async () => {
    try {
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('payload');
    } catch (error) {
        return null;
    }
};

export const isAuthenticated = async () => {
    const token = await getAccessToken();
    return token == null ? false : true;
};

export const getPayload = async () => {
    try {
        const payload = await AsyncStorage.getItem('payload');
        return JSON.parse(await AsyncStorage.getItem('payload'));
    } catch (error) {
        console.log("a:" + error);
        return null;
    }
}