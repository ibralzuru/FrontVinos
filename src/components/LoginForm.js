
//import { Input, Button, Stack, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  loginUser, userData } from '../userSlice';



const LoginForm = () => {
  /*   const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    }) */
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [msgError, setMsgError] = useState();

    // variables
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const credenciales = useSelector(userData);


    const updateCredentials = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value });

    }

    useEffect(() => {
       
        if(credenciales?.token !== ""){
            navigate('/')
        }
        

    }, []);

    useEffect(() => {
        if (credenciales?.token !== "") {
            navigate('/');
        }

    });

    const logueame = () => {

        //Compruebo con una expresion regular si el email tiene arroba y si esta escrito en formato email
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {
            //Si no lo esta llamo modifico MsgError con un string y retorno el error
            setMsgError('Introduce un e-mail válido');
            return;
        }

        //Compruebo si el password tiene mas de 4 caracteres con una expresion regular si no los tiene ejecuto el error de la linea 73
        if (credentials.password.length > 4) {
            if (! /[\d()+-]/g.test(credentials.password)) {
                //Este error no se ejecuta porque el error de backend lo sobrescribe. 
                setMsgError("Introduce un password valido");
                return;
            }
        } else {
            //Si el password es inferior a 5 caracteres se modifica MsgError con este string
            setMsgError("Password minimo de 5 caracteres")
            return
        }

        //Si tengo algo referenciado como error, lo limpio
        setMsgError("")

        //Utilizo dispatch, el metodo de redux para ejecutar el reducer
        dispatch(loginUser({ email: credentials.email, password: credentials.password }))
    }

    return (

        <div className='contenedor-login'>
            
            <div className='formulario-login'>
                <input className='inputLogin' type='email' name='email' title='email' placeholder='Escribe tu Email' onChange={updateCredentials} />
                <input className='inputLogin' type='password' name='password' title='password' placeholder='Contraseña' onChange={updateCredentials} />
                <div className='msgErrorLogin'>{msgError}</div>
                <div className="loginButton" onClick={() => logueame()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </div>
            </div>
        </div>
    )
}



export default LoginForm;