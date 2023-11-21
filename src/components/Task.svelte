<script>
  import {deleteTask} from '../stores/taskStore'
  export let task;

</script>

<li>
  <input name="completed" type="checkbox"
  bind:checked={task.completed}
  />
  <span class={`${task.completed ? 'line-through' : ''}`}>{task.text}</span>
  <button on:click={() => deleteTask(task.id)} type="button">Delete</button>
</li>


