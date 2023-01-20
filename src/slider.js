import Newimage from './Newimage.avif';
import Download from './Download.png';
import QR from './QR.png';
import ALLDEALS from './ALLDEALS.avif'


function MySlider() {
  return (
    
    <>
    
    <img id='off' src={Newimage} />
    {/* <img id="Alldeals" src={ALLDEALS} /> */}
    <img id='download' src={Download} />
    <img id='qr' src={QR} /></>

  )

}
export default MySlider;