let mappedUserList = [];

function map(user) {
    let mappedUser = {};
    mappedUser['id'] = user.id;
    mappedUser['name'] = user.firstName + " " + user.lastName;
    mappedUser['status'] = user.status;
    mappedUserList.push(mappedUser)
}

export const usersMapper = (users) => {
    JSON.parse(users).forEach(map);
    let mapped = {};
    mapped['isRecivedUsers'] = true;
    mapped['users'] = mappedUserList;
    return mapped;
};