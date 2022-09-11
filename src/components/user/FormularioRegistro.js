import React from 'react';
import { Input, Button, Stack, Box } from '@mui/material'

const FormularioRegistro = () => {
  /*   const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    }) */

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="600px"
    >
      <h1>Crear cuenta</h1>
      <form>
        <Stack spacing={4}>
          <Input variant='filled' placeholder='email' />
          <Input variant='filled' placeholder='password' />
          <Button variant="contained">Crear cuenta</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default FormularioRegistro;

