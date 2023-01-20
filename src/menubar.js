import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Toolbar from '@mui/material/Toolbar';
import hugesavings from './hugesavings.gif'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:"whitesmoke"}}>
      <AppBar id='appbar' position="static" height="1px" color='transparent'>
        <Toolbar>
            <table>
                <tr>
                <td><h4 id='All'>ALL CATEGORIES </h4> 
                </td>
                </tr>
            </table>
            <h3 id='selected'><ArrowDropDownIcon />  <span id='line' className='menuline'>|</span></h3>
            <div className='classes'><h3 id='elec'  >ELECTRONICS</h3></div>
            <div className='classes'><h3 >MEN</h3></div>
            <div className='classes'><h3 >WOMEN</h3></div>
            <div className='classes'><h3 >BEAUTY & FRAGRANCE</h3></div>
            <div className='classes'><h3 >BABY AND TOYS</h3></div>
            <div className='classes'><h3 >SPORTS</h3></div>
            <div className='classes'><h3 >BESTSELLERS</h3></div>
            <div className='classes'><h3 >SELL ON MOON</h3></div>
            <img id='gif' src={hugesavings}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}