//import { useRadioGroup } from '@mui/material';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';


export const userSlice = createSlice({
   
    name: 'user',
    initialState: {
        token:""
    },

   
    reducers: {
        login: (state,action) => {
            return {
                ...state,
                ...action.payload
            }
        },
  
        logout: (state,action) => {
            return{
                token: ""
            }
        },
        update:(state,action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    },
});

export const loginUser = (body) => async (dispatch) => {

    try {
        //Utilizo axios
        const user = await axios.post("http://localhost:8000/api/login", body)
        //Console.log para que me muestre los datos del usuario (id/user/token)
        console.log("Soy user",user)

        //Decodifico el token
        let decodificada = jwt(user.data.token)

        //Si me devuelve un 200 hago el login y decodifico el token.
        if(user.status === 200){
            dispatch(login({...decodificada,token: user.data.token, user}))
        }

    } catch (error) {
        //Como retorno este error en un setMsgError?
        console.log(error.response.data.message)
    }
}
/* export const loginUser = (body) => async (dispatch) => {

    try {
     
        const user = await axios.post("http://localhost:8000/api/login", body)

        console.log("Soy user",user)

    
        let decodificada = jwt(user.data.token)

    
        if(user.status === 200){
            localStorage.setItem('user', user.data ? JSON.stringify(user.data) : null);
            dispatch(login({...decodificada,token: user.data.token}))
        }

    } catch (error) {
     
        console.log(error.response.data.message)
    }
} */


//Exporto logOut que simplemente me devuelve el initialState del token y a si permite que el usuario se desloguee
export const logOut = () => (dispatch) => {
    dispatch(logout())
}

//Update user
export const updateUser = (dataUser,perfilUsuario) => async (dispatch) =>{
    try {
        let body = {
            name: perfilUsuario.user_name,
            surname: perfilUsuario.user_surname,
            email: perfilUsuario.user_email,
            address: perfilUsuario.user_address,
            city: perfilUsuario.user_city,
            mobile: perfilUsuario.user_mobile,
            password: perfilUsuario.user_password
            
        }
        console.log(body)
        console.log("brooooo",dataUser)
        let config = {
            headers: {Authorization: `Bearer ${dataUser.token}`}
        };

        let resultado = await axios.put(`http://localhost:8000/api/profile/update/${dataUser.user.data.user.id}`,body, config);
        console.log(resultado)

        if(resultado.status === 200) {
            //Si el usuario cambia email o password le fuerzo un logout
          
            dispatch(update({perfilUsuario}));
           
            //Hacemos un update local de las credenciales del usuario
            
          }
    
    } catch (error) {
        console.log(error)
    }
}


//Exporto los reducers login,logout
export const {login,logout,update} = userSlice.actions;

//No entiendo bien esta linea
export const userData = (state) => state.user;

//Exporto el nuevo slice llamado "userSlice"
export default userSlice.reducer
