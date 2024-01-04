'use client';
import Modal from '../Modal';
import { useState } from 'react';
import DeleteBrand from './DeleteBrand';

const ModalDeleteBrand = ({ idBrand }: { idBrand: number }) => {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700"
      >
        Eliminar
      </button>
      <Modal show={ modalShow } onClose={ closeModal }>
        <DeleteBrand idBrand={ idBrand } closeModal={closeModal}/>
      </Modal>
    </div>
  );
};
export default ModalDeleteBrand;