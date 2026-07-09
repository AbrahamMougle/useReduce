import { useState, useReducer } from "react";
import AddTask from "./AddTask.js";
import { TaskList, Task } from "./TaskList.js";
import reducer from "./reducer";
const initialTasks = [
  { id: 0, text: "Visiter le musée Franz-Kafka", done: true },
  { id: 1, text: "Voir un spectacle de marionnettes", done: false },
  { id: 2, text: "Prendre une photo du mur John Lennon", done: false },
];
export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  function onAddTask(task) {
    dispatch({ type: "add", text: task });
  }
  function onDeleteTask(id) {
    dispatch({
      type: "delete",
      id: id,
    });
  }
  function onChangeTask(task) {
    dispatch({
      type: "change",
      task: task,
    });
  }
  return (
    <div>
      <h1>Voyage à Prague</h1>
      <AddTask onAddTask={onAddTask} />
      {
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task
                task={task}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
              />
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
