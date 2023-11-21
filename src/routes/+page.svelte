<script>
  import TaskForm from '../components/TaskForm.svelte';
  import Task from '../components/Task.svelte';
  import {tasks} from '../stores/taskStore'
</script>

<main>
  <h1>Tasks</h1>

  <TaskForm/>
  
  <ul>
    {#each $tasks as task (task.id)}
      <Task task={task} />
    {/each}
  </ul>

</main>
