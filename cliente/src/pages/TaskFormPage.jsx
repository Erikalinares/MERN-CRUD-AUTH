/*import  { useForm }from 'react-hook-form';
import { useTasks } from '../context/TaskContext.jsx';

function TaskFormPage() {

    const {register, handleSubmit } = useForm()
    const {createTask} = useTasks();
    
    
    const onSubmit = handleSubmit ((data ) => {
      createTask(data);
    })

   
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <form onSubmit={onSubmit}>

        <input 
        type="text" 
        placeholder="Title" 
        {...register("title")}
        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        autoFocus
        />
        
        <textarea 
        rows="3" 
        placeholder="Description"
        {...register("Description")}
        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        /> 
        <button>
          Save
        </button>

      </form>

    </div>
  )
}

export default TaskFormPage*/

import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TaskContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id)
        console.log(task)
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask();
  }, [])

  /*const onSubmit = handleSubmit(async (data) => {
    try {
      
      await createTask({
        title: data.title,
        description: data.description,
        
        // Puedes agregar otros campos necesarios aquí
      });
      navigate('/tasks')
      // Redirige o realiza cualquier otra acción después de crear la tarea
    } catch (error) {
      console.error(error);
    }
  });*/

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
        updateTask(params.id, data)

    } else {
      createTask(data);

    }
    navigate('/tasks');

  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register('title')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register('description')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;