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
      taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done}: t)
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
    <main className="bg-dark vh-100 text-white">

      <h1 className='text-center'>Creador de tareas</h1>
      <div className='container col-md-4 offset-md-4 p-4'>
        <TaskCreator crearTarea={crearTarea}/>
        <TaskTable tasks = {taskItems} toggleTask={toggleTask}/>
        <VisibilityControl
          isCheked = {showCompleted}
          setShowCompleted={(checked) => setShowCompleted (checked)}
          cleanTasks = {cleanTasks}
        />
        {
          showCompleted === true && (
            <TaskTable tasks = {taskItems} toggleTask={toggleTask} showCompleted = {showCompleted}/>
          )
        }
      </div>
    </main>
  );
}

export default App;
