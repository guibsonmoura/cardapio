import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { estiloCardMedia } from './style';
import './style.css';



export default function({to, preco,imagem,link}){
    
    return(
        <Card sx={{width:'100%',maxWidth:'550px'}}>
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <CardMedia sx={estiloCardMedia}>
                        <img src={imagem} className='img' alt='imagem produto'/>
                    </CardMedia>
                    <Box sx={{display:'flex',flexGrow:1,flexDirection:'column',justifyContent:'center',width:'80%',height:'auto'}}>
                        <Typography variant='h5' sx={{textAlign: 'center'}}>
                            {preco}
                        </Typography> 
                        
                        <Button 
                            component={link}
                            to={to}
                            sx={{display:'flex',justifyContent:'end',alignItems:'center',}}>
                                <ArrowForwardIcon sx={{color:'#000',}}/>
                        </Button>
                    </Box>
            </CardActions>
        </Card>
    )
    
}