import logo from './logo.svg';
import './App.css';
import {User} from './User.js';
import {useState} from 'react';
import {Item} from './Item'

function App() {
  
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskState, setNewTaskState] = useState(1);
  const [taskId, generateTaskId] = useState(0);

  const taskStates = ['New', 'In Progress', 'Done'];

  const getNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const getStateOfNewTask = (event) => {
    setNewTaskState(event.target.value);
  }

  const addTaskToList = () => {
    generateTaskId(taskId + 1);
    const state = taskStates[parseInt(newTaskState)-1];

    const newItem = {
      newTask: newTask,
      state: state,
      taskId: taskId,
      complete: false
    }

    const newList = [...toDoList, newItem];
    setToDoList(newList);
    console.log(newList);
  }

  const deleteTask = (taskId) => {
    const newList = toDoList.filter((task) => {
      return task.taskId !== taskId;
    })
    setToDoList(newList);
  }

  const completeTask = (taskId) => {

    setToDoList(toDoList.map((task) => {
      if (task.taskId === taskId){
        return {...task, complete: !task.complete};
      } 
      return task;
    }))


  }

  return (
    <div className="App">

      <div className='addTask'>
        <input type="text" required placeholder='Task Name' onChange={getNewTask}/>
        <select onChange={getStateOfNewTask}>
          <option value={1}>New</option>
          <option value={2}>In Progress</option>
          <option value={3}>Done</option>
        </select>
        <button onClick={addTaskToList}>Add Task</button>
      </div>

      <div className='toDoList'>
        
        {

          toDoList.map((task) => {
            return (
              <Item value={task} deleteTask={deleteTask} completeTask={completeTask} />
            )
          })
          
        }
      </div>
      
    </div>
  );
}

export default App;

/*

item:
  name: anything
  state: ToDo, Done, InProgress

*/