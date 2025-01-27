/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */
// Write your solution hereconst todoList = [];
const todoList = [];
function addTask(task) {
    if (task && typeof task === 'string' && !todoList.includes(task)) {
        todoList.push(task);
        return `${task} added to the list.`;
    } else {
        return 'Error: Task cannot be empty or already exists.';
    }
}
function removeTask(task) {
    const taskIndex = todoList.indexOf(task);

    if (taskIndex !== -1) {
        todoList.splice(taskIndex, 1);
        return `${task} removed from the list.`;
    } else {
        return 'Error: Task not found.';
    }
}
function showTasks() {
    return [...todoList];
}
module.exports = { addTask, removeTask, showTasks };
