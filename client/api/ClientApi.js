import axios from 'axios';
import {usersMapper} from '../mappers/userMapper'
const serverErrorMessage = "'unhandled error please contacts your administrator'";

export const login = (userName) => {

    let promise =  axios.post('/login', { userName: userName }).then(respone => {
                        return respone.data;
                }).catch(function (error) {
                    Materialize.toast(serverErrorMessage, 4000);
                    return false
                });

                return promise;
};

export const setUserStatus = (user,status) => {

    let reqUser= Object.assign({}, user);
    reqUser.status = status;
    let promise =  axios.post('/update', { user: reqUser }).then(respone => {
                        return respone.data;
                }).catch(function (error) {
                    Materialize.toast(serverErrorMessage, 4000);
                    return false
                });

                return promise;
};


export const getUserList = (userId) => {

    let promise =  axios.post('/users', { connectedUserId: userId }).then(respone => {
                        return usersMapper(respone.data.body);
                }).catch(function (error) {
                    Materialize.toast(serverErrorMessage, 4000);
                    return false
                });

                return promise;
};
