import * as React from 'react';
import Stack from '@mui/material/Stack';
import homesale from './homesale.png'
import toysale from './toysale.png'
import clearanceroom from './clearanceroom.avif'
import noongift from './noongift.avif'
import deals from './deals.avif'
import mobiles from './mobiles.png'
import beauty from './beauty.avif'
import mensfashion from './mensfashion.avif'
import womensfashion from './womensfashion.avif'
import baby from './baby.avif'
import appliances from './appliances.avif'
import laptops from './laptops.avif'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function ImageAvatars() {
  return (
    <> 
     <Stack direction="row" spacing={2}>
      <ArrowLeftIcon id="righticon" />
        <img id='homesale' className='avatar' src={homesale} />
        <img id='toysale' className='avatar' src={toysale} />
        <img id='clearanceroom' className='avatar' src={clearanceroom} />
        <img id='noongift' className='avatar' src={noongift} />
        <img id='deals' className='avatar' src={deals} />
        <img id='mobiles' className='avatar' src={mobiles} />
        <img id='beauty' className='avatar' src={beauty} />
        <img id='mensfashion' className='avatar' src={mensfashion} />
        <img id='womensfashion' className='avatar' src={womensfashion} />
        <img id='baby' className='avatar' src={baby} />
        <img id='appliances' className='avatar' src={appliances} />
        <img id='laptops' className='avatar' src={laptops} />
        <ArrowRightIcon id="lefticon" />
    </Stack>
    </>
  );
}