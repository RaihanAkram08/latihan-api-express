let users = [];
let nextUserId = 1;

module.exports.addUserGateway = (data) => {
    const user = {
        user_id: nextUserId++,
        ...req.body
    };
    users.push(user);
    return user.user_id;
}

module.exports.getAllUserGateway = () => {
    return users;
}

module.exports.getUserByIdGateway = (id) => {
    const user = users.find(u => u.user_id === id)
    return user;
}

module.exports.updateUserGateway = (id) => {
    const user = users.find(u => u.user_id === id)
    return user;
}

module.exports.deleteUserGateway = (id) => {
    const userIndex = users.findIndex(u => u.user_id === id);
    if (userIndex) {
        users.splice(userIndex, 1);
        return true;
    } else {
        return false;
    }
}