export const VisibilityControl = ({setShowCompleted, cleanTasks}) => {
    
    const handleDelete = () => {
        if(window.confirm('Estás seguro de eliminar la tarea?')){
            cleanTasks()
        }
    };
    return(

        
        <div>
        <input type='checkbox' onChange={e=> setShowCompleted(e.target.checked) }/> <label>Mostrar tareas hechas</label>
    
        <button onClick={handleDelete}>Eliminar tareas hechas</button>
        </div>
    )

    
}