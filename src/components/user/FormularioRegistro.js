import React from 'react';
import { Input, Button, Stack, Box } from '@mui/material'
import Typography from '@mui/material/Typography';


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
      <Typography variant="h3" color="ActiveBorder" paddingBottom={10} >
        Crea tu cuenta
      </Typography>

      <form >
        <Stack spacing={4}>
          <Input variant='filled' placeholder='user name' />
          <Input variant='filled' placeholder='email' />
          <Input variant='filled' placeholder='password' />
          <Button variant="outlined">Crear cuenta</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default FormularioRegistro;


