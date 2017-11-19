import axios from 'axios';

const localStorageTokenKey = "token";

export const login = (email,password) => {

    let promise =  axios.post('/login', { userName: email, password: password }).then(respone => {
                    let isLogged = false;
                    if(respone.data.access_token && respone.data.isLoggedin)
                    {
                        isLogged = true
                        localStorage.setItem(localStorageTokenKey, respone.data.access_token);
                    }
                    else
                    {
                        Materialize.toast('Wrong user details', 4000)
                    }
                    return isLogged

                }).catch(function (error) {
                    console.log("rest: login error: " + error);
                    Materialize.toast('unhandled error please contacts your administrator', 4000)
                    return false
                });

    return promise;

};

export const isLoggedin =() => {

    let access_token = localStorage.getItem(localStorageTokenKey);

    let promise =  axios.post('/isLoggedin', { access_token: access_token}).then(respone => {
        let isLogged = false;
        if(respone.data.isLogged)
        {
            isLogged = true
        }

        return isLogged

    }).catch(function (error) {
        console.log("rest: isLoggedin error: " + error);
        Materialize.toast('unhandled error please contacts your administrator', 4000)
        return false
    });

    return promise;
};

export const register = (userName,password,tpId) => {

    let promise =  axios.post('/register', { userName: userName, password: password, tpId: tpId }).then(respone => {
        let isRegister = false;
        if(respone.data.access_token && respone.data.isRegistered)
        {
            isRegister = true
            localStorage.setItem(localStorageTokenKey, respone.data.access_token);
        }
        else
        {
            Materialize.toast('Wrong user details', 4000)
        }
        return isRegister

    }).catch(function (error) {
        console.log("rest: register error: " + error);
        Materialize.toast('unhandled error please contacts your administrator', 4000)
        return false
    });

    return promise;

};

export const isRegistered =(pos) => {

    let promise =  axios.post('/isRegistered', { pos: pos}).then(respone => {
        let isRegistered = false;
        if(respone.data.isRegistered)
        {
            isRegistered = true
        }

        return isRegistered

    }).catch(function (error) {
        console.log("rest: isRegistered error: " + error);
        return false
    });

    return promise;
};