import './App.css';
import ButtonAppBar from './Appbar';
import Header from './menubar';
import MySlider from './slider';
import ImageAvatars from './avatar';
import Crop169Icon from '@mui/icons-material/Crop169';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ActionAreaCard from './cards1';
import SecondCard from './card2';
import ThirdCard from './card3';
import IphoneArea from './ncard';
import DealsNoon from './deals';
import ToySale from './toyssale';
import giftcard from './giftcard.avif'
import learnmore from './learnmore.gif'
import Areaiphone from './icard';
import Button from '@mui/material/Button';
// import UncontrolledExample from './imageslider';
import ShoesCollection from './shoescollection';
import WomensFashion from './womensfashions';
import babytransport from './babytransport.avif'
import membership1 from './membership1.avif'
import Emaar from './Emaar.avif'
import Electronics from './electronics';
import Footer from './footer';

function App() {
  return (
    <><ButtonAppBar />

    <Header />
    <section id='section'>
    <MySlider />
<ImageAvatars  />
<div>
  <div >
    <br />
  <Crop169Icon id='load' />
  </div>
</div>
    </section>
    <section id='sectiontwo'>
       <div id='sect1'>
        <h2 className='heading'>  More reasons to shop</h2>
        <ActionAreaCard />
       </div >
       <div id='sect2'>
        <h2 className='heading'>Mega deals of the day <span><ScheduleIcon /> <span id='hours' >24 hours only!</span></span> </h2>
        <SecondCard />
       </div>
       <div id='sect3'>
        <h2 className='heading'>In focus</h2>
        <ThirdCard />
       </div>
    </section>
    <section id='sectionthree'>
      <div>
        <h3 id='head'>Recommended for you</h3>
      </div>
      <div id='areaiphone'>
      <IphoneArea />
      </div>
    </section>
    <section id='sectionfour'>
      <DealsNoon />

    </section>
    <section id='sectionfive'>
      {/* <UncontrolledExample /> */}
      <br />
      <ToySale />
    </section>
    <section id='sectionsix'>
     <div >
     <img id='giftcard' src={giftcard} />
      </div> 
      
      <div>
        <h3 id='headsix'>Trending deals in electronics</h3>
      </div> 
     <div id='iphonearea'>
      <Areaiphone />
      </div>
      <div >
        <img id='learnmore' src={learnmore} />
      </div>
      <div>
        <h3 id='headsix'>Clearance deals</h3>
        <Button id='btn' variant="outlined" size="medium">
          VIEW ALL
        </Button>
        <div id='shoes'>
          <ShoesCollection />
        </div>
      </div>
    </section>
    <section id='sectionseven'>
      <WomensFashion />
    </section>
    <section id='sectionseven'>
      <WomensFashion />
    </section>
    <section id='sectionseven'>
      <WomensFashion />
    </section>
    <section id='sectioneight'>
    <div>
      <img id='babytransport' src={babytransport} />
    </div>
    <div>
      <h2 id='electronics'>Electronics</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Mobiles & accessories </h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Laptops & accessories</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <img id='membership1' src={membership1} />
    </div>
    <div>
      <h2 id='electronics'>Beauty</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Fragrances</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Home & kitch favourites</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Home appliances</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Baby must-haves</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW All
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Toys</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Sports & outdoor essentials</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>noon brand favourites</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Watches</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Eyewear</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Health & Nutrition</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Furniture</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <h2 id='electronics'>Stationary and office supplies</h2>
      <Button id='btn1' variant="contained" size="large">
          VIEW ALL
        </Button>
    </div>
    <div>
      <Electronics />
    </div>
    <div>
      <img id='Emaar' src={Emaar} />
    </div>
    </section>
    <Footer />

    </>
    
    );
}

export default App;
