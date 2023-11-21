<script>
  import { addTask } from '../stores/taskStore'
  let task = '';

  const handleSubmit = () => {
    addTask(task);
    task = '';
  }

const isEmpty = (task) => task == '';
</script>

<form on:submit|preventDefault={handleSubmit} class="my-6">
  <div class="flex flex-col text-sm mb-2">
    <label for="task" class="font-bold mb-2 text-gray-100">Task</label>
    <input  bind:value={task} type="text" name="task" placeholder="Add your task" class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"/>
  </div>

  <button disabled='{isEmpty(task)}' type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 transition-colors duration-500 disabled:bg-gray-100 disabled:text-black disabled:cursor-not-allowed disabled:text-gray-200">Submit</button>

</form>