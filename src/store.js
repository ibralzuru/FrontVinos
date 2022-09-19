import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';



//funcion que devuelve el nuevo estado
export default configureStore({
    
    reducer: {
        user: userSlice,
    }
});