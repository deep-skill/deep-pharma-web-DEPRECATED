'use client';
import Modal from '../Modal';
import React, { useState } from 'react';
import CreateTag from '../tag/createTag';

const ModalDelete = ({ idTag } : { idTag: number }) => {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  return (
    <div>
      <button onClick={openModal} className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700">Crear Tag</button>
      <Modal show={modalShow} onClose={closeModal}>
        <CreateTag  closeModal={closeModal}/>
      </Modal>
    </div>
  );
};
export default ModalDelete
