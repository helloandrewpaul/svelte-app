<script>
  import {deleteTask} from '../stores/taskStore'
  export let task;

</script>

<li class="bg-white flex items-center shadow-sm border-gray-200 rounded-lg my-2 py-2 px-4">
  <input name="completed" type="checkbox"
  bind:checked={task.completed}
  class="mr-2 h-5 w-5"/>
  <span class={`flex-1 ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
  <button on:click={() => deleteTask(task.id)} type="button" class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Delete</button>
</li>


