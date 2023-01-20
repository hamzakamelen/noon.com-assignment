import { Typography } from '@mui/material';
import * as React from 'react';
import iphone from './iphone.avif'
import express from './express.svg'
import star from './star.svg'
import airpods from './airpods.avif'
import playstation from './playstation.avif'
import watch from './watch.avif'
export default function IphoneArea() {
  return (
    <>
    <div id='ncard1'>
        <div id='imgdiv'>
        <img id='image' src={iphone} />
        </div>
        <div>
            <Typography id="text">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="text">
                <br />
                AED <span id='Rs'>5199.00</span>
            </Typography>
            <div id='express'>
                <img src={express} />
                <h4>4.0 <img id='star' src={star} /></h4> 
                <span id='span'>(107)</span>
            </div>
        </div>
    </div>
    <div id='ncard2'>
        <div id='imgdiv'>
        <img id='image' src={iphone} />
        </div>
        <div>
            <Typography id="text">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="text">
                <br />
                AED <span id='Rs'>5199.00</span>
            </Typography>
            <div id='express'>
                <img src={express} />
                <h4>4.0 <img id='star' src={star} /></h4> 
                <span id='span'>(107)</span>
            </div>
        </div>
    </div>
    <div id='ncard3'>
        <div id='imgdiv'>
        <img id='image' src={playstation} />
        </div>
        <div>
            <Typography id="text">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="text">
                <br />
                AED <span id='Rs'>5199.00</span>
            </Typography>
            <div id='express'>
                <img src={express} />
                <h4>4.0 <img id='star' src={star} /></h4> 
                <span id='span'>(107)</span>
            </div>
        </div>
    </div>
    <div id='ncard4'>
        <div id='imgdiv'>
        <img id='image' src={watch} />
        </div>
        <div>
            <Typography id="text">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="text">
                <br />
                AED <span id='Rs'>5199.00</span>
            </Typography>
            <div id='express'>
                <img src={express} />
                <h4>4.0 <img id='star' src={star} /></h4> 
                <span id='span'>(107)</span>
            </div>
        </div>
    </div>
    <div id='ncard5'>
        <div id='imgdiv'>
        <img id='image' src={airpods} />
        </div>
        <div>
            <Typography id="text">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="text">
                <br />
                AED <span id='Rs'>5199.00</span>
            </Typography>
            <div id='express'>
                <img src={express} />
                <h4>4.0 <img id='star' src={star} /></h4> 
                <span id='span'>(107)</span>
            </div>
        </div>
    </div>
    </>
  );
}