import { useRadioGroup } from '@mui/material';
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
}


//Exporto logOut que simplemente me devuelve el initialState del token y a si permite que el usuario se desloguee
export const logOut = () => (dispatch) => {
    dispatch(logout())
}




//Exporto los reducers login,logout
export const {login,logout,update} = userSlice.actions;

//No entiendo bien esta linea
export const userData = (state) => state.user;

//Exporto el nuevo slice llamado "userSlice"
export default userSlice.reducer
