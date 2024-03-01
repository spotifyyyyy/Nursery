
import { Carousel } from 'flowbite-react';

function Testhero() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel>
     <img className='' src={require('./IMG-20240215-WA0014.jpg')}></img>
     <img className='' src={require('./IMG-20240215-WA0009.jpg')}></img>
     <img className='' src={require('./IMG-20240215-WA0007.jpg')}></img>
     <img className='' src={require('./IMG-20240215-WA0023.jpg')}></img>
     <img className='' src={require('./IMG-20240213-WA0017.jpg')}></img>

      </Carousel>
    </div>
  );
}
export default Testhero
