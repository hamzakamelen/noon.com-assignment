import * as React from 'react';
import bestsellingmobile from './bestsellingmobile.avif';
import gamecards from './gamecards.avif';

function ThirdCard() {
  return (
    <>
        <div>
            <img id='cardimg1' src={bestsellingmobile} />
        </div>
        <div>
            <img id='cardimg2' src={gamecards} />
        </div>
    </>
  );
}
export default ThirdCard;