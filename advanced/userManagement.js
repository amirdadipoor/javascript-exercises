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
let users = new Set( []);

const addUser = name => users.has(name) ? false : users.add(name);

const removeUser = name => users.has(name) ? users.delete(name) : false ;

const showUsers = () => [...users];
module.exports = { addUser, removeUser, showUsers };
