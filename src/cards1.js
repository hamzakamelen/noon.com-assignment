import * as React from 'react';
import toprated from './toprated.avif';
import bestsellers from './bestsellers.avif'
import newarrivals from './newarrivals.avif'
import noonbrands from './noonbrands.avif'


export default function ActionAreaCard() {
  return (
    <>
        <div>
            <img id='imgs1' src={toprated} />
            <img id='imgs2' src={bestsellers} />
        </div>
        <div>
            <img id='imgs3' src={newarrivals} />
            <img id='imgs4' src={noonbrands} />
        </div>
    </>
  );
}