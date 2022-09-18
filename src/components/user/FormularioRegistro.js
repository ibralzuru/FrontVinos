import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Stack, Typography, TextField, Box } from '@mui/material'






const FormularioRegistro = (props) => {

    //HOOK con los datos a rellenar

    const [userDades, setUserDades] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        apellido: '',
        segundoApellido: '',

    });

    const [registrado, setRegistrado] = useState('');
    const [msgError, setMsgError] = useState('');

    //variable
    let navigate = useNavigate();

    //HANDLERS

    const updateUserDades = (e) => {
        setUserDades({ ...userDades, [e.target.name]: e.target.value })
    }

    //Creamos por primera vez el componente con este useEffect.
    useEffect(() => {

    }, [])

    //Con este useEffect, cada vez que se modifica algo, se actualiza.
    useEffect(() => {

    })

    const Registrate = async () => {

        //Primero, comprobación de campos vacíos

        let datos = ['name', 'email', 'password', ' address', 'phoneNumber', 'apellido', 'segundoApellido'];

        for (let field of datos) {
            if (userDades[field] === '') {
                setMsgError(`Te ha faltado ${[field]} por rellenar`);
                return;
            }
        }
        //Con esto válidamos que el email este correctamente.
        if (!userDades.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            setMsgError('introduce un email válido!');
            return;
        }

        //Validar telf correcto
        if (!userDades.phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)) {
            setMsgError('el telefono tiene que ser correcto!');
            return;

        }



        //La pasword tiene que ser de un tamaño especificado, en este caso entre 6 y 10 digitos.
        if (userDades.password.length < 6 || userDades.password.length > 10) {

            setMsgError("La password tiene que ser entre 6 y 10 digitos");
            return;
        }
        //La password requiere un caracter especial.
        if (!userDades.password.match(/^(?=.*[*@!#%&()^~{}]).*$/)) {

            setMsgError("falta un caracter especial en la password ejemplo [ *@!#%&()^~{} ]");
            return;
        }

        //enviamos los datos a la base de datos 
        let intentoRegistro = await axios.post("http://localhost:8000/api/register", userDades);

        //si el registro realizado es correcto, es decir es igual a un 200, nos 
        //redirigira al side Login para que te logees en la web
        if (intentoRegistro.status === 200) {

            setRegistrado(true);

            setTimeout(() => {
                navigate('/login');

            }, 2000);
        }
    }

    if (registrado === true) {

        return (
            <div className="registerDesign">
                Te has registrado correctamente {userDades.name}
            </div>
        )

    } else {
        return (
            <div className='registerDesign'>
                <div className='subRegisterDesign'>
                    <div className='divtitle'>
                        <h3>Formulario de Registro</h3>
                    </div>
                    <div className='divInputs'>
                        <div className="registerRight">
                            <input className='bottonDesign' placeholder='name' type='text' name='name' title='name' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='email' type='email' name='email' title='email' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='Password' type='password' name='password' title='password' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='address' type='text' name='address' title='address' onChange={updateUserDades} />



                        </div>
                        <div className="registerRight">
                            <input className='bottonDesign' placeholder='phoneNumber' type='text' name='phoneNumber' title='phoneNumber' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='apellido' type='text' name='apellido' title='apellido' onChange={updateUserDades} />
                            <input className="bottonDesign" placeholder='segundoApellido' type='text' name='segundoApellido' title='segundoApellido' onChange={updateUserDades} />

                        </div>

                    </div>
                    <div className="designMessageError">
                        {msgError}
                    </div>
                    <div className='divBotton'>
                        <div className="bottonDesignRegister" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a onClick={() => Registrate()}> REGISTRATE</a>
                        </div>
                    </div>

                </div>


            </div>

        )


    }
}




export default FormularioRegistro;


