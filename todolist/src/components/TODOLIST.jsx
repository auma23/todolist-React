import { useState } from "react";
import TodoItem from "./TodoItem";
function TODOLIST() {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text:'Learn Data',
            completed: true
        },
        {
            id:2,
            text:'Attend class',
            completed: false
        },
        {
            id:3,
            text:'Do project',
            completed: false
        }
    ]);
    const [text,setText] = useState('');
    function addTask(text){
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask])
        setText('');
        
            }
            function deleteTask(id) {
                setTasks(tasks.filter(task => task.id !== id));
                }
            function toggleCompleted(id) {
                setTasks(tasks.map(task => {
                if (task.id === id) {
                return {...task, completed: !task.completed};
                } else {
                return task;
                } 
                }));
    }
  return (
    <div>
         <input value={text} onChange={e => setText(e.target.value)} className="" />
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addTask(text)}> Add </button>
        {tasks.map(task =>(
            <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted ={toggleCompleted}
            />
        ))}
      
    </div>
  )
}
export default TODOLIST