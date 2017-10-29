import axios from 'axios';

export const login = (email,password) => {

    return axios.post('/login', { userName: email, password: password })

};
