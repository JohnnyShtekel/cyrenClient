import axios from 'axios';

const localStorageTokenKey = "token";

export const login = (email,password) => {

    let promise =  axios.post('/login', { userName: email, password: password }).then(respone => {
                    let isLogged = false;
                    if(respone.data.access_token && respone.data.isLogged)
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



export const register =() => {

    return true
};

export const isRegister =(pos) => {

    let promise =  axios.post('/isRegister', { pos: pos}).then(respone => {
        let isRegister = false;
        if(respone.data.isRegister)
        {
            isRegister = true
        }

        return isRegister

    }).catch(function (error) {
        console.log("rest: isRegister error: " + error);
        return false
    });

    return promise;
};