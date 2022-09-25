import React, { useState, useEffect } from 'react';
import '../ProductDetail/ProductDetail'
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
import { CardHeader, IconButton } from '@mui/material';
import { useParams } from "react-router-dom";
import axios from 'axios';
import accounting from 'accounting';

const ProductDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [productRes, setProductRes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`http://localhost:8000/api/product/get/${id}`);
        setProductRes(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [id]);


  return (
    <div className="containerProductDetail">
      {loading && <div>Loading</div>}

      {!loading && (
        <>
          <CssBaseline />
          <Container maxWidth="sm">
            <Card sx={{ maxWidth: 315, minWidth: 10 }}>
              <CardHeader
                action={
                  <Typography
                    variant='h5'
                    color='textSecondary'
                  >
                    {accounting.formatMoney(productRes.data.precio, "€")}
                  </Typography>
                }

              />
              <CardMedia
                component="img"
                height="auto"
                image={productRes.data.images}
                alt={productRes.data.description}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                  {productRes.data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productRes.data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to Cart" >
                  <AddShoppingCart fontSize='large' />
                </IconButton>
                <IconButton>
                  {Array(4)
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