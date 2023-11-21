import { writable } from 'svelte/store';

export const tasks = writable([]);

export const addTask = (text) => {
	tasks.update((cur) => {
		const newTask = [...cur, { text, completed: false, id: Date.now() }].reverse();
		return newTask;
	});
};

export const deleteTask = (id) => {
	tasks.update((tasks) => tasks.filter((task) => task.id !== id));
};
