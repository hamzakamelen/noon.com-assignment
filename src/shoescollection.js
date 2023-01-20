import shoeswhite from './shoeswhite.avif'
import express from './express.svg'
import star from './star.svg'
import { Typography } from '@mui/material'

function ShoesCollection(){
    return(
        <>
        <div id='scard1'>
        <div id='simgdiv'>
        <img id='simage' src={shoeswhite} />
        </div>
        <div>
            <Typography id="stext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress' className='sexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
        <div id='scard2'>
        <div id='simgdiv'>
        <img id='simage' src={shoeswhite} />
        </div>
        <div>
            <Typography id="stext2">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext2">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress' className='sexpress2'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
        <div id='scard3'>
        <div id='simgdiv'>
        <img id='simage' src={shoeswhite} />
        </div>
        <div>
            <Typography id="stext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress' className='sexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
        <div id='scard4'>
        <div id='simgdiv'>
        <img id='simage' src={shoeswhite} />
        </div>
        <div>
            <Typography id="stext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress' className='sexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
        <div id='scard5'>
        <div id='simgdiv'>
        <img id='simage' src={shoeswhite} />
        </div>
        <div>
            <Typography id="stext">
                <b>A</b>pple iPhone 14 Pro Max <br />
                Physical Dual Sim 256GB D... 
            </Typography>
            <Typography id="itext">
                <br />
                AED <span id='iRs'>5199.00</span>
            </Typography>
            <div id='iexpress' className='sexpress'>
                <img src={express} />
                <h4>4.0 <img id='istar' src={star} /></h4> 
                <span id='ispan'>(107)</span>
            </div>
        </div>
    </div>
    </>
    )
}
export default ShoesCollection