"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task1 = {
    id: 1,
    name: 'Task 1',
    description: 'This is a task',
    done: false,
    category: 'work',
    difficulty: 1,
    type: 'task',
    optional: false,
    location: 'home',
};
var task2 = {
    id: 2,
    name: 'Task 2',
    description: 'This is a task',
    done: false,
    category: 'work',
    difficulty: 1,
    type: 'task',
    optional: false,
    location: 'home',
};
var taskList = [];
function addTask(task) {
    taskList.push(task);
}
addTask(task1);
addTask(task2);
function removeTask(task, index) {
    if (task) {
        taskList.splice(taskList.indexOf(task), 1); //splice(start, deleteCount)
    }
    else if (index) {
        taskList.splice(index, 1);
    }
}
console.log(JSON.stringify(taskList));
removeTask(task2);
console.log(JSON.stringify(taskList));
