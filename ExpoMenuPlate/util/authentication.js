import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('access_token');
export const setAccessToken = (token) => Cookies.set('access_token', token);
export const isAuthenticated = () => !!getAccessToken();
export const destroyAccessToken = () => Cookies.remove('access_token');