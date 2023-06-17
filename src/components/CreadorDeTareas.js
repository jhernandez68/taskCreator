import { useState, useEffect } from 'react';
//useEffect se ejecuta cada vez que un dato cambia

//Se exporta el componente
export const TaskCreator = ({crearTarea} /*aqui van los props*/) => {


    //Use state siempre va a linicioar
    const [nuevoNombreTarea, setNuevoNombreTarea] = useState('');

    const handleSubmit = (e) => { //funcion
        e.preventDefault(); //hace que no recargue la página

        crearTarea(nuevoNombreTarea);

        alert('enviado');
        setNuevoNombreTarea('');
    } 



    return (
        /* Form -> onsubmit suele enviar datos al backend*/
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className='col-9'>
                <input type='text' placeholder='Ingresa una nueva tarea' 
                    value={nuevoNombreTarea}
                    onChange={(e) => setNuevoNombreTarea(e.target.value)}
                    className='form-control'/>
            </div>

            <div className='col-3'>
                <button className='btn btn-success btn-sm'>Guardar</button>
            </div>

        </form>
    )
}