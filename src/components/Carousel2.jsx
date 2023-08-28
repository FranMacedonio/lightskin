import { useState } from 'react';
import { register } from 'swiper/element/bundle';
register();

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { productos } from '../products';
import Card from '../components/Card';

export const Carousel = ({ data }) => {
  const [modal, setModal] = useState({
    imagen: [{ frente: '' }, { dorso: '' }],
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const findCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nombre =
      e.target.getAttribute('alt') ||
      e.target.getElementsByClassName('swiper-slide-active')[0].textContent;
    console.log(nombre);
    // const producto = productos.find((x) => x.nombre == nombre);
    // setModal(producto);
    // handleOpen();
  };

  return (
    <>
      <swiper-container
        class='mySwiper'
        effect='cards'
        grab-cursor='true'
        onClick={findCard}
      >
        {data.map((producto) => (
          <swiper-slide key={producto.id}>
            <Card data={producto} />
          </swiper-slide>
        ))}
      </swiper-container>
      <Modal open={open} onClose={handleClose}>
        <Box className='modal'>
          <h2>{modal.nombre}</h2>
        </Box>
      </Modal>
    </>
  );
};
