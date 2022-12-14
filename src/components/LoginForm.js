
import { TextField, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, userData } from '../userSlice';


const LoginForm = () => {
  /*   const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    }) */
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [msgError, setMsgError] = useState();


  let navigate = useNavigate();
  const dispatch = useDispatch();
  const credenciales = useSelector(userData);

  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (credenciales?.token !== "") {
      navigate('/')
    }

  }, [credenciales?.token, navigate]);

  useEffect(() => {
    if (credenciales?.token !== "") {
      navigate('/');
    }
  });

  const logueame = () => {

    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {

      setMsgError('Introduce un e-mail válido');
      return;
    }

    if (credentials.password.length > 4) {
      if (! /[\d()+-]/g.test(credentials.password)) {

        setMsgError("Introduce un password valido");
        return;
      }
    } else {

      setMsgError("Password minimo de 5 caracteres")
      return
    }


    setMsgError("")


    dispatch(loginUser({ email: credentials.email, password: credentials.password }))
    
  }

  return (


    <Stack spacing={0} sx={{ maxWidth: '400px', margin: 'auto' ,height:'40em',  width: '50em' }}>

      <div

        style={{
          
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        className='formulario-login'>
        <Stack spacing={3}sx={{ textAlign:'center'}} >
        <Typography variant="h4" color="ActiveBorder" padding={5} textAlign="center">
       Iniciar sesión
      </Typography>
          <TextField className='inputLogin' type='email' name='email' title='email' placeholder='Escribe tu Email' onChange={updateCredentials} />
          <TextField className='inputLogin' type='password' name='password' title='password' placeholder='Contraseña' onChange={updateCredentials} />
          <div className='msgErrorLogin'>{msgError}</div>
          <div className="loginButton" onClick={() => logueame()}>
            <Button variant="contained" sx={{  margin: 'auto' , width: '27em' }}>
              Iniciar sesión
            </Button>
          </div>
        </Stack>
      </div>
    </Stack>
  )
}

export default LoginForm;