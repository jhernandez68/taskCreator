export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {
    
    const handleDelete = () => {
        if(window.confirm('Estás seguro de eliminar la tarea?')){
            cleanTasks()
        }
    };
    return(

    <div className="my-2 row">
    <div className="col-9 d-flex justify-content-between">
        <div>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>
        </div>
        <div>
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
            Eliminar tareas hechas
        </button>
        </div>
    </div>
    </div>
    )

    
}