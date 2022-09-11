
import React, { Fragment } from "react";


const Formulario = () => {

  /*   const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    }) */


    return (
        <Fragment>
            <h1>Formulario</h1>
            <form>
                <div>
                    <input
                        placeholder="Ingrese Nombre"
                        type="text"
                        name="nombre"
                    ></input>
                </div>
                <div>
                    <input
                        placeholder="Ingrese Apellido"
                        type="text"
                        name="apellido"

                    ></input>
                </div>
                <div>
                    <button type ="submit">Enviar</button>
                </div>
            </form>
        </Fragment>

    );
}

export default Formulario;