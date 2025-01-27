/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */
let users = [];
function addUser (user) {
    if (!users.includes(user)) {
        users.push(user);
    } else {
        console.log(`User  "${user}" already exists.`);
    }
}
function removeUser (user) {
    const index = users.indexOf(user);
    if (index !== -1) {
        users.splice(index, 1);
    } else {
        console.log(`User  "${user}" not found.`);
    }
}
function showUsers() {
    if (users.length === 0) {
        return "No users available.";
    }
    return users;
}
module.exports = { addUser, removeUser, showUsers };
