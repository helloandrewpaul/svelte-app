<script>
  import TaskForm from '../components/TaskForm.svelte';
  import {tasks} from '../stores/taskStore'
</script>

<main>
  <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Tasks</h1>

  <TaskForm/>
  {#each $tasks as task}
  <Task task={task} index={task.id}/>
  {/each}

</main>
