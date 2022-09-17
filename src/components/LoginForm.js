import React from 'react';
import { Input, Button, Stack, Box, Typography } from '@mui/material'

const LoginForm = () => {
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
        Iniciar Sesión
      </Typography>
      <form>
        <Stack spacing={4}>
          <Input variant='filled' placeholder='email' />
          <Input variant='filled' placeholder='password' />
          <Button variant="contained">Iniciar sesión</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default LoginForm;