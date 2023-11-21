<script>
  import TaskForm from '../components/TaskForm.svelte';
  import {tasks} from '../stores/taskStore'
</script>

<main>
  <h1>Tasks</h1>

  <TaskForm/>
  {#each $tasks as task}
  <Task task={task} index={task.id}/>
  {/each}

</main>
