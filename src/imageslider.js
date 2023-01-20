import Carousel from 'react-bootstrap/Carousel';
import slideimg1 from './slideimg1.avif'
import slideimg2 from './slideimg2.avif'

function UncontrolledExample() {
  return (
    <div className='slider'>
        <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg1}
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg2}
          alt="Second slide"
          />
        </Carousel.Item>
    </Carousel>
          </div>
          </div>
  );
}

export default UncontrolledExample;