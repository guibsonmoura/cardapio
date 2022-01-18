import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { estiloCardMedia } from './style';
import './style.css'


export default function({texto, preco,imagem,descricaoProduto}){
    const [clicado, setClicado] = React.useState(null);
  
    const open = Boolean(clicado);
    
    
    const handleClick = (event) => {
        setClicado(event.currentTarget);
    };
    const handleClose = () => {
        setClicado(null);
    };
    return(
        <Card sx={{width:'100%',maxWidth:'550px'}}>
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    
                    <Box sx={{display:'flex',flexGrow:1,flexDirection:'column',justifyContent:'center',width:'80%',height:'auto'}}>
                        <Typography paragraph>
                            {texto}
                        </Typography>
                        <Typography variant='h5'>
                            {preco}
                        </Typography>
                        <Button 
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            size='large'
                            sx={{justifyContent:'start'}}
                        >
                            <KeyboardArrowDownIcon sx={{color:'#000'}}/>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={clicado}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Typography paragraph sx={{p:3}}>{descricaoProduto}</Typography>
                        </Menu>
                        
                    </Box>
                    <CardMedia sx={estiloCardMedia}>
                        <img src={imagem} className='img' alt='imagem produto'/>
                    </CardMedia>
            </CardActions>
        </Card>
    )
    
}