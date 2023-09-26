/*import { createContext, useContext, useState } from 'react';
import { createTaskRequest } from '../api/tasks.js';


const TaskContext = createContext(); 

export const useTasks = () => {
    const context = useContext (TaskContext);
    if(!context) throw new Error ("useTasks must be used within a TaskProvider");
    return context; 
};

export function TaskProvider ({children}) {
  const [ tasks, setTasks] = useState([]);

  const createTask = (task) => {
    console.log('task')
   
  };

    return (
        <TaskContext.Provider 
        value={{
            tasks,
            createTask
        }}>
          {children}
        </TaskContext.Provider> 
    );
}*/

import React, { createContext, useContext, useState } from 'react';
import { createTaskRequest } from '../api/tasks.js';

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
};

export function TaskProvider({ children }) {
  
  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}