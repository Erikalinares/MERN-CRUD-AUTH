

function TaskCard({task}) {
    console.log(task);
  return (
    <div className="bg-zinc-400 max-w-md w-full p-10 rounded-md">
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <div>
            <button>Delete</button>
            <button>Editar</button>
          </div>
          <p className="text-slate-200">{task.description}</p>
          <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard