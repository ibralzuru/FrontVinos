import * as React from 'react';
//import React, { useState, useEffect } from 'react';
//import '../ProductDetail/ProductDetail'
/* import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { takeData } from './detailSlice';
import axios from 'axios'; */
import '../ProductDetail/ProductDetail.css'

const ProductDetail = () => {

/*   let credenciales = useSelector(userData)
  let detallesPelicula = useSelector(takeData);
  let navegador = useNavigate()


  //Hooks

  const [msgError, setMsgError] = useState("")


  useEffect(() => {


  }, []);

  useEffect(() => {
    if (credenciales.token === "") {
      navegador('/')
    }
  });


  //Alquilar Pelicula
  const alquilar = async () => {

    try {
      let config = {
        headers: { Authorization: `Bearer ${credenciales.token}` }
      };


      let resultado = await axios.post(`https://buscadordepeliculas.herokuapp.com/api/order/${detallesPelicula._id}`, "", config)
      setMsgError(`Has alquilado ${resultado.data.data.movieName} `)
      
    } catch (error) {
      setMsgError(`${error.response.data.message}`)
      console.log(error.response.data.data)
    }
  } */


  return (
    <div className="containerProductDetail">


      <div className="">
        <div className="">{/* {detallesPelicula.name} */}</div>
        <div className="">{/* {detallesPelicula.description} */}</div>
        <div className="">Genero: {/* {detallesPelicula.genre} */}</div><br />
        <div className="">Director:{/*  {detallesPelicula.director} */}</div><br />
        <div className="">Actores: {/* {detallesPelicula.actors} */}</div><br />

        <div className=''>
          <div className="" /* onClick={() => comprar()} */>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Comprar</div>
        </div>
        <div className=''>{/* {msgError} */} </div>

      </div>
      <div className=""></div>
    </div>

  )
}
export default ProductDetail;