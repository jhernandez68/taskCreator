import './App.css';
import { useState, useEffect } from 'react';
import { TaskCreator } from './components/CreadorDeTareas';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [taskItems, setTaskItems] = useState([

  ]);

  const [showCompleted, setShowCompleted] = useState(false);

  function crearTarea(nombreTarea){
    if(!taskItems.find(task => task.name === nombreTarea)){ //filtra que no estén repetidos
      setTaskItems([...taskItems, {done: false, name:nombreTarea}]);
    }
  }

  //Función para cambiar el estado de la tarea

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name == task.name) ? {...t, done: !t.done}: t)
    )
  }

  const cleanTasks = () => {
    setTaskItems( taskItems.filter(task => !task.done));
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')

    if(data) {
      setTaskItems (JSON.parse(data));
    }
    console.log('done');
  }, [/**Si no hay nada aquí se ejecuta a penas se inicia la app */])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems /**El valor que se va a cambiar */])


  return (
    //Contenedor principal
    <div className="App">
      <TaskCreator crearTarea={crearTarea}/>
      <TaskTable tasks = {taskItems} toggleTask={toggleTask}/>
      <VisibilityControl

        setShowCompleted={(checked) => setShowCompleted (checked)}
        cleanTasks = {cleanTasks}
      />
      {
        showCompleted === true && (
          <TaskTable tasks = {taskItems} toggleTask={toggleTask} showCompleted = {showCompleted}/>
        )
      }
    </div>
  );
}

export default App;
