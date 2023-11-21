<script>
  import TaskForm from '../components/TaskForm.svelte';
  import Task from '../components/Task.svelte';
  import {tasks} from '../stores/taskStore'
</script>

<main class="bg-slate-950">
  <h1 class="text-2xl font-bold text-center text-gray-100 md:text-3xl">Tasks</h1>

  <TaskForm/>
  
  <ul>
    {#each $tasks as task (task.id)}
      <Task task={task} />
    {/each}
  </ul>

</main>
