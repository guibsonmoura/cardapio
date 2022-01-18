import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';  
import Cartao from '../../components/menuCardapio/index';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import {estiloContainer,estiloAppBar,estiloGridContainer,estiloCaxiaTexto,estiloGridItem} from './style';
import Comidas from '../../assets/Carne.jpg';
import Suco from '../../assets/sucoLaranja.jpg';
import Hamburguer from '../../assets/hamburguer.jpg';

import './style.css'

export default function(){
    const imagem = 'https://source.unsplash.com/category/nature/'
    const imagens = [{
        imagem:Hamburguer,
        preco:'Lanches',
        to:'/lanches', 
        link:Link
    },
    {
        imagem:Comidas,
        preco:'Comidas',
        to:'/Comidas', 
        link:Link
    },
    {
        imagem:Suco,
        preco:'Bebidas',
        to:'/bebidas', 
        link:Link
    },
    ]
    
    return(
        <Container 
            maxWidth="sm"
            sx={
                estiloContainer
                }
        >
            <AppBar position='static'color='secondary' sx={estiloAppBar}>
                <Box sx={estiloCaxiaTexto}>
                    <Typography variant='h2'>Master Dog</Typography>
                </Box>
            </AppBar>
            <Grid container spacing={3} sx={estiloGridContainer} >
                {imagens.map((obj) => (
                    <Grid item xs={12} sx={estiloGridItem} classes={{item:'gridItemStyle'}}>
                        <Cartao
                            imagem={obj.imagem}
                            preco={obj.preco}
                            link={obj.link}
                            to={obj.to}
                        />
                    </Grid>
                ))}               
               
            </Grid>
            
        </Container>
    )
}