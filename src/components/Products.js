import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { Typography } from '@mui/material';


const Products = () => {
  const [loading, setLoading] = useState(true);
  const [productsRes, setProductsRes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("http://localhost:8000/api/product/get");
        setProductsRes(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="ActiveBorder" padding={5} textAlign="center">
        Nuestros Vinos
      </Typography>

      {loading && <div>Loading</div>}

      {!loading && (
        <Grid container spacing={{ xs: 2, md: 2, sm: 2 }} columns={{ xs: 12, sm: 12, md: 12, lg: 16 }}>
          {productsRes.data.map((item, index) => {
            
            return (
              <Grid key={index} item xs={6} sm={6} md={4} lg={3} >
                <Product
                  id={item.id}
                  name={item.name}
                  images={item.images}
                  precio={item.precio}
                  description={item.description}
                />
              </Grid>
            )
          }
          )}
        </Grid>
      )}
    </Box>
  )
}

export default Products;