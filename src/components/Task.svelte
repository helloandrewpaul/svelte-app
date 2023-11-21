<script>
  import {deleteTask, toggleTaskCompleted} from '../stores/taskStore'
  export let task;
</script>

<li>
  <input name="completed" type="checkbox"
  checked={task.completed}
  on:change={() => toggleTaskCompleted(task.id)}
  />
  <span class={` ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
  <button on:click={() => deleteTask(task.id)} type="button">Delete</button>
</li>