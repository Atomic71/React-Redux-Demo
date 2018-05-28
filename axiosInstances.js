import axios from 'axios';

export const authenticationHandler = (userConfig) => axios.post(
    'https://radiant-escarpment-95925.herokuapp.com/api/login/',
    userConfig
);
