import React, { useState, useEffect } from 'react';
//import axios from 'axios'; 
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AddShoppingCart } from '@mui/icons-material';
import { CardHeader, IconButton } from '@mui/material';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from './carritoSlice';
import '../ProductDetail/ProductDetail.css'
import accounting from 'accounting';

const ProductDetail = () => {
  const { id } = useParams()
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [productRes, setProductRes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`http://localhost:8000/api/product/get/${id}`);
        setProductRes(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [id]);

  //funcion guardar producto en redux
  const addProductToCart = (producto) => {
    const productData = {
      producto_id: producto.id,
      name: producto.name,
      precio: producto.precio,
      unidades: 1
    }
    dispatch(addProduct(productData));
  }

  return (
    <div className="containerProductDetail">
      {loading && <div>Loading</div>}

      {!loading && (
        <>
          <CssBaseline />
          <Container maxWidth="xs">

            <Card sx={{ maxWidth: 'auto', padding: '1em', marginTop: '2em' }}>
              <CardHeader
                action={
                  <Typography
                    variant='h5'
                    color='textSecondary'
                  >
                    {accounting.formatMoney(productRes.precio, "€")}
                  </Typography>
                }
          
              />
              <CardMedia


                component="img"
                height="auto"
                image={productRes.images}
                alt={productRes.description}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {productRes.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productRes.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to Cart" onClick={() => addProductToCart(productRes)} >
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
        </>
      )}
    </div>

  )
}
export default ProductDetail;