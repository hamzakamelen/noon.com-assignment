import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from './logo.png';
import USAflag from './USAflag.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:" rgb(255, 230, 0);"}}>
      <AppBar id='navbar' position="static" height="5px" color='transparent'>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}> 
            <img src={logo} height={22}/>
           </IconButton>
           <img src={USAflag} height={18} />
            <h4 id='delivertousa'><span id='del'> Deliver to </span> <span id='neww'> <KeyboardArrowDownIcon /> </span><br /> USA</h4>
        <div>
            <input type="text" id='searchfield' placeholder='  What are you looking for?'/>
        </div>
        <div>
          <div>
            <h4 id='arbi'>العربية<span id='line'>   |</span> </h4>
            </div>
            <div>
            <h4 id='signintext'>Sign In <PersonOutlineOutlinedIcon /> <span id='line'>   |</span></h4>
            </div>
            <div>
            <h4 id='cart'>Cart <ShoppingCartOutlinedIcon /> </h4>
            </div>
        </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}