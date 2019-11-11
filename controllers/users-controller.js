const { users } = require('./../data/users');

const show = (req, res) => {
    res.send({ users, message: 'success' });
}

const getById = (req, res) => {
    let { id } = req.params; 
    let arrUser = users.filter(u => u.id == id);
    let user, message;

    if (arrUser.length === 0) {
        user = {};
        message = 'fail';
    }
    else {
        user = arrUser[0];
        message = 'success';
    }

    res.send({ user, message });
}

const destroy = (req, res) => {
    let { id } = req.params; 
    let index = users.findIndex(u => u.id == id);
    let user, message;

    if (index === -1) {
        user = {};
        message = 'fail';
    }
    else {
        user = users.splice(index, 1)[0];
        message = 'success';
    }

    res.send({ user, message });
}

const create = (req, res) => {
    let data = req.body;
    let id = users[users.length - 1].id + 1;
    let user = {id, ...data};
    users.push(user);

    res.send({ user, message: 'success' });
}

const update = (req, res) => {
    let data = req.body;
    let { id } = req.params; 
    let index = users.findIndex(u => u.id == id);
    let user, message

    if (index === -1) {
        user = {};
        message = 'fail';
    }
    else {
        user = { id: users[index].id, ...data };
        users[index] = user;
        message = 'success';
    }

    res.send({ user, message });
}

module.exports = {
    show,
    getById,
    create,
    update,
    destroy
}