import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import "./estilo.css"

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 650,
  height: 270,
  bgcolor: 'white',
  border: '2px solid #302E53',
  p: 2,
  px: 4,
  pb: 3,
};

export default function Modal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='btn-principal' type="button" onClick={handleOpen}>
        Ver mais
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <section className='modal'>
          <div className='modal__img'>
          <img src={props.img}/>
          </div>
          <div className='modal__info'>
          <h1 id="unstyled-modal-title">{props.titulo}</h1>
          <p>{props.data}</p>
          <p id="unstyled-modal-description">{props.resumo}</p>
         <button className='modal__btn'> <a href={props.site} target="_blank">Ir para o site </a></button>
          </div>
          </section>
        </Box>
      </StyledModal>
    </div>
  );
}
