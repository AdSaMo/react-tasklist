import React from 'react'
import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("") 
    //Las llaves en vez del nombre especifican que de todo el objeto especificado en el return de TaskContext.jsx solo queremos la función createTask
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        /*El objeto e simplemente es un objeto por defecto que significa "evento" de forma que cuando haya un evento la función podrá actuar */
        /*Los formularios se reinician por defecto así que con prevent default evitamos que esto pase por defecto */
        e.preventDefault();
        console.log(title,description)
        /*Le estamos pasando como parámetro a la función declarada en App cada new task ESTO ES LO QUE COMUNICA APP CON TASKFORM simpleente a través de un prop */
        createTask({
            title : title,
            description : description,
        })
        setTitle('')
        setDescription('')
    }
  return (
    /*Esto únicamente da formato de formulario al input y al botón */
    <div className="max-w-md mx-auto">
        <h1 className="text-white text-2xl font-bold mb-3">Crea una tarea</h1>
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <input 
        placeholder='Escribe tu tarea' 
        onChange={(e)=> setTitle(e.target.value)}
        value = {title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea 
        placeholder="Escribe la descripción de la tarea"
        onChange = {e => setDescription(e.target.value) } 
        value = {description}
        className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-lime-500 rounded-md px-3 py-1 mt-4">
            Guardar
        </button>
    </form>
    </div>
  )
}

export default TaskForm