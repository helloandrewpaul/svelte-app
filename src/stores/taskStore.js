import { writable } from 'svelte/store';

export const tasks = writable([]);

export const addTask = (text) => {
	tasks.update((cur) => {
		const newTask = [...cur, { text, completed: false, id: Date.now() }];
		return newTask;
	});
};

export const deleteTask = (id) => {
tasks.update((tasks) => tasks.filter((task) => task.is !== id));
};

export const toggleTaskCompleted = (id) => {
	tasks.update((tasks) => {
		let index = -1;
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === id) {
				index = i;
				break;
			}
			if (index !== -1) {
				tasks[index].completed = !tasks[index].completed;
			}
			return tasks;
		}
	});
};
