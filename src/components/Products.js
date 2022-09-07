import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';




export default function Navbar() {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 6, sm: 12, md: 12 }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Product/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}