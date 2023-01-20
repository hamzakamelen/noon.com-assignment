import * as React from 'react';
import AOC from './AOC.avif';
import princess from './princess.avif';
import cosmoplast from './cosmoplast.png';
import buildingtoys from './buildingtoys.avif';

function SecondCard() {
  return (
    <>
        <div>
            <img id='imgs1' src={AOC} />
            <img id='imgs2' src={princess} />
        </div>
        <div>
            <img id='imgs3' src={cosmoplast} />
            <img id='imgs4' src={buildingtoys} />
        </div>
    </>
  );
}
export default SecondCard