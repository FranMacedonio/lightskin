import { Carousel } from '../components/Carousel2';
import { productos } from '../products';

export default function Shop() {
  const categoria = (categoria) => {
    return productos.filter((x) => x.categoria == categoria);
  };

  return (
    <div id='shop'>
      <Carousel data={categoria('camperas')} />
      <Carousel data={categoria('remeras')} />
    </div>
  );
}
