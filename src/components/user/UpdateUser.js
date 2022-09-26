import React, { /* useEffect,  */useState } from 'react';
import { updateUser, userData } from '../../userSlice';
import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import '../user/UpdateUser.css';

const UpdateUserProfile = () => {

    const dataUser = useSelector(userData)
    console.log('que pasoooooo', dataUser.user.data.user)
    const dispatch = useDispatch()


    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name: dataUser.user.data.user.name,
        user_surname: dataUser.user.data.user.apellido,
        user_email: dataUser.user.data.user.email,
        user_address: dataUser.user.data.user.address,
        user_mobile: dataUser.user.data.user.phoneNumber,
        user_segundoApellido: dataUser.user.data.user.segundoApellido,

    })
    const handlerInputs = (e) => {

        setPerfilUsuario({ ...perfilUsuario, [e.target.name]: e.target.value })
        console.log(perfilUsuario)
    }
    const editUser = () => {
        dispatch(updateUser(dataUser, perfilUsuario))
    }


    return (

        <div className='editProfileDesign'>
            <div className="editProfileDesignContainer">
                <h3 className='titleEditProfile'>Mis Datos personales</h3>
                <input className='input' value={perfilUsuario.user_name} type='text' name='user_name' title='name' disabled onChange={handlerInputs} lenght='30' />
                <input className='input' value={perfilUsuario.user_surname} type='text' name='user_surname' title='surname' disabled onChange={handlerInputs} lenght='30' />
                <input className='input' value={perfilUsuario.user_segundoApellido} type='text' name='user_segundoApellido' title='segundoApellido' onChange={handlerInputs} lenght='30' />
                <input className='input' value={perfilUsuario.user_email} type='text' name='user_email' title='email' onChange={handlerInputs} lenght='30' />
                <input className='input' value={perfilUsuario.user_address} type='text' name='user_address' title='address' onChange={handlerInputs} lenght='30' />
                <input className='input' value={perfilUsuario.user_mobile} type='text' name='user_mobile' title='mobile' onChange={handlerInputs} lenght='30' />
                <button onClick={() => editUser()}>
                    Modificar Usuario
                </button>
            </div>
        </div>

    )

}


export default UpdateUserProfile
