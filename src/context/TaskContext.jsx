import React from 'react'
import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

/*Con esta función (create contest) puedo asignar un nombre al contexto para toda la aplicación que será padre de todo */
 export const TaskContext = createContext()

/*Ahora creamos el componente que engolba al resto*/
 export function TaskContextProvider(props) {
  /*Este useState inicializa el elemento antes de la coma y 
    posteriormente le aplica una función llamada setTask. Además
    establece que el estado inicial de tasks es una matriz vacía. Esa función siempre
    establece el estado inicial */
    const [tasks, setTasks] = useState([]);

    function createTask(task){
      /*Esto coge todo lo que había en tasks del archivo tasks.js y añade a esa matriz un elemento nuevo task que es lo que 
      le estamos pasando a esta función. Los tres puntos es como decir "copia todos los valores de tasks" */
      /*Finalmente lo establecemos como el estados de tasks con setTasks */
      setTasks([...tasks,{
        title : task.title,
        id : tasks.length,
        description : task.description

      }])

    }

    function deleteTask(taskId){
      /*Cor cada tarea que recorre mira con filter si el id es igual al que hemos proporcionado a la función */
     setTasks(tasks.filter(task => task.id !== taskId))

    }

    /*useEffect permite cuando carga el componente pasarle  tasks (con nombre data)
    a la regla de tareas setTasks
      */
    useEffect(() =>{
      setTasks(data)

  },[])



   /*Aquí tenemos que incluir en value todo lo que queramos exportar como props al resto de la aplicación */
  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask:createTask,
    }}>
      {props.children}
    </TaskContext.Provider>
    
  )
}

