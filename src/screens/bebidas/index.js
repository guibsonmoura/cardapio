import React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import Typography from '@mui/material/Typography';
import Cartao from '../../components/Card';
import {Link} from 'react-router-dom'
import './style.css'
import { estiloAppBar,estiloContainer,estiloCaxiaTexto,estiloGridItem,estiloGridContainer} from '../lanches/styles';

export default function(){
    const imagem = 'https://source.unsplash.com/category/nature/'
    const imagens = [{
        imagem:imagem,
        texto: 'texto aqui',
        preco:'R$ 50,00',
        descricaoProduto:'Arroz - Tomate - Carne 180g - Bacon - Calabresa - Pão - feijão'
    },
    {
        imagem:imagem,
        texto: 'outro texto',
        preco:'R$ 50,00',
        descricaoProduto:'Arroz - Tomate - Carne 180g - Bacon - Calabresa - Pão - feijão'
    },
    {
        imagem:imagem,
        texto: 'aqui vai a descrição de um produto',
        preco:'R$ 50,00',
        descricaoProduto:'Arroz - Tomate - Carne 180g - Bacon - Calabresa - Pão - feijão'
    },
    {
        imagem:imagem,
        texto: 'aqui vai outra descrição de outro produto',
        preco:'R$ 50,00',
        descricaoProduto:'Arroz - Tomate - Carne 180g - Bacon - Calabresa - Pão - feijão - Arroz - Tomate - Carne 180g - Bacon - Calabresa - Pão - feijão'
    },
    ]
    return(
        <Container maxWidth='sm' sx={estiloContainer}>
            <AppBar position='static'color='secondary' sx={estiloAppBar}>
                <Link to='/' className='link'>
                    <IconButton size='large' edge='start' color='primary' sx={{ml:3}}>
                        <KeyboardBackspaceOutlinedIcon sx={{color:'#000'}}/>
                    </IconButton>
                </Link>
                <Box sx={estiloCaxiaTexto}>
                    <Typography variant='h2'>Bebidas</Typography>
                </Box>
            </AppBar>
            <Grid container spacing={3} sx={estiloGridContainer}>
                {imagens.map((obj) => (
                    <Grid item xs={12} sx={estiloGridItem} classes={{item:'gridItemStyle'}}>
                        <Cartao
                            imagem={obj.imagem}
                            texto={obj.texto}
                            preco={obj.preco}
                            descricaoProduto={obj.descricaoProduto}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
