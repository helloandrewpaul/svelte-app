<script>
	import { get } from 'svelte/store';
  import { addTask } from '../stores/taskStore'
  let task = '';

  const handleSubmit = () => {
    addTask(task);
    task = '';
  }

const isEmpty = (task) => task == '';
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="task">Task</label>
    <input  bind:value={task} type="text" name="task" placeholder="Add your task"/>
  </div>

  <button disabled='{isEmpty(task)}' type="submit">Submit</button>

</form>