import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { Typography } from '@mui/material';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("http://localhost:8000/product/get");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  console.log("DATA: ", data)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="ActiveBorder" padding={5} textAlign="center">
        Nuestros Vinos
      </Typography>

      {loading && <div>Loading</div>}

      {!loading && (
        <Grid container spacing={{ xs: 6, md: 3, sm: 2 }} columns={{ xs: 6, sm: 12, md: 12, lg: 16 }}>
          {data.map((item, index) => {
            console.log("ITEM: ", item)
            return (
              <Grid key={index} item xs={6} sm={6} md={4} lg={3} >
                <Product />
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