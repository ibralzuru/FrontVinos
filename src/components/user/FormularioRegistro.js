import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Stack, Typography } from '@mui/material'

const FormularioRegistro = (props) => {

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


  let navigate = useNavigate();



  const updateUserDades = (e) => {
    setUserDades({ ...userDades, [e.target.name]: e.target.value })
  }

  useEffect(() => {

  }, [])


  useEffect(() => {

  })

  const Registrate = async () => {

    let datos = ['name', 'email', 'password', ' address', 'phoneNumber', 'apellido', 'segundoApellido'];

    for (let field of datos) {
      if (userDades[field] === '') {
        setMsgError(`Te ha faltado ${[field]} por rellenar`);
        return;
      }
    }

    if (!userDades.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
      setMsgError('introduce un email válido!');
      return;
    }


    if (!userDades.phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)) {
      setMsgError('el telefono tiene que ser correcto!');
      return;
    }


    if (userDades.password.length < 6 || userDades.password.length > 10) {

      setMsgError("La password tiene que ser entre 6 y 10 digitos");
      return;
    }

    if (!userDades.password.match(/^(?=.*[*@!#%&()^~{}]).*$/)) {

      setMsgError("falta un caracter especial en la password ejemplo [ *@!#%&()^~{} ]");
      return;
    }


    let intentoRegistro = await axios.post("http://localhost:8000/api/register", userDades);


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
          <Stack spacing={1} sx={{ maxWidth: '400px', margin: 'auto' }}>
            <Typography variant="h4" color="ActiveBorder" padding={5} textAlign="center">
              Formulario de Registro
            </Typography>
            <TextField className='bottonDesign' placeholder='name' type='text' name='name' title='name' onChange={updateUserDades} />
            <TextField className='bottonDesign' placeholder='email' type='email' name='email' title='email' onChange={updateUserDades} />
            <TextField className='bottonDesign' placeholder='Password' type='password' name='password' title='password' onChange={updateUserDades} />
            <TextField className='bottonDesign' placeholder='address' type='text' name='address' title='address' onChange={updateUserDades} />
            <TextField className='bottonDesign' placeholder='phoneNumber' type='text' name='phoneNumber' title='phoneNumber' onChange={updateUserDades} />
            <TextField className='bottonDesign' placeholder='apellido' type='text' name='apellido' title='apellido' onChange={updateUserDades} />
            <TextField className="bottonDesign" placeholder='segundoApellido' type='text' name='segundoApellido' title='segundoApellido' onChange={updateUserDades} />
            <div className="designMessageError">
              {msgError}
            </div>
            <div className='divBotton'>
              <Button variant="contained" sx={{ margin: 'auto', width: '28.5em' }} onClick={() => Registrate()}>Crear Cuenta</Button>
            </div>
          </Stack>
        </div >
      </div >
    )
  }
}

export default FormularioRegistro;


