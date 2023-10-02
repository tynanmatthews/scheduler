import { Task } from './src/task';

let task1: Task = {
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

let task2: Task = {
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

let taskList: Task[] = [];

function addTask(task: Task) {
    taskList.push(task);
}

addTask(task1);
addTask(task2);

function removeTask(task?: Task, index?: number) {
    if (task) {
        taskList.splice(taskList.indexOf(task), 1); //splice(start, deleteCount)
    } else if (index) {
        taskList.splice(index, 1);
    }
}

console.log(JSON.stringify(taskList));

removeTask(task2);

console.log(JSON.stringify(taskList));