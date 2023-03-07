const fs = require('fs');
const path = require('path');

class User {
    constructor(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.isActive = true;
        this.dateCreated = new Date();
    }
}

const users = [
    new User('u1', 'pass1', 15),
    new User('u2', 'pass2', 43),
    new User('u3', 'pass3', 64),
    new User('u4', 'pass4', 32),
    new User('u5', 'pass5', 51),
    new User('u6', 'pass6', 23),
    new User('u7', 'pass7', 41),
    new User('u8', 'pass8', 12),
    new User('u9', 'pass9', 24),
    new User('u10', 'pass10', 19)
];

fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));

const createUser = (username, password, age) => {
    const newUser = new User(username, password, age);
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));
    data.push(newUser);
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(data));
};

const makeInactiveUsers = () => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));
    const today = new Date();
    data.forEach(user => {
        if ((today - new Date(user.dateCreated)) / (Date.now() / 1000) >= 1) {
            user.isActive = false;
        }
    });
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(data));
};


createUser('u11', 'pass11', 73);
makeInactiveUsers();
