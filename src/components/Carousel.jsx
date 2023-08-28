import { register } from 'swiper/element/bundle';
import ModalButton from './Button';

register();

export const Carousel = ({ data }) => {
  return (
    <swiper-container
      class='swiper'
      navigation='true'
      pagination='true'
      mousewheel='true'
      speed='500'
    >
      {data.map((producto) => (
        <swiper-slide key={producto.id}>
          <ModalButton data={producto} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};
