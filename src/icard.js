import { Typography } from '@mui/material';
import * as React from 'react';
import iphone from './iphone.avif'
import express from './express.svg'
import star from './star.svg'
import airpods from './airpods.avif'
import playstation from './playstation.avif'
import watch from './watch.avif'


export default function Areaiphone() {
  return (
    <>
    <div id='icard1'>
        <div id='iimgdiv'>
        <img id='iimage' src={iphone} />
        </div>
        <div>
            <Typography id="itext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
    <div id='icard2'>
        <div id='iimgdiv'>
        <img id='iimage' src={airpods} />
        </div>
        <div>
            <Typography id="itext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
    <div id='icard3'>
        <div id='iimgdiv'>
        <img id='iimage' src={playstation} />
        </div>
        <div>
            <Typography id="itext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
    <div id='icard4'>
        <div id='iimgdiv'>
        <img id='iimage' src={iphone} />
        </div>
        <div>
            <Typography id="itext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
    <div id='icard5'>
        <div id='iimgdiv'>
        <img id='iimage' src={watch} />
        </div>
        <div>
            <Typography id="itext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
    </>
  );
}