import * as React from 'react';
//import React, { useState, useEffect } from 'react';
//import '../ProductDetail/ProductDetail'
/* import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { takeData } from './detailSlice';
import axios from 'axios'; */
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../ProductDetail/ProductDetail.css'
import { AddShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';


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




      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">

          <Card sx={{ maxWidth: 'auto', minHeight: '20em' }}>
            <CardMedia
              component="img"
              height="auto"
              image="https://static.carrefour.es/hd_3200x_/img_pim_food/140865_00_1_Bodega.jpg"
              alt="foto del vino Paco y Lola"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Paco y Lola
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to Cart" >
                <AddShoppingCart fontSize='large' />
              </IconButton>
              <IconButton>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>&#11088;</p>
                  ))}
              </IconButton>
            </CardActions>
          </Card>


        </Container>
      </React.Fragment>





    </div>

  )
}
export default ProductDetail;