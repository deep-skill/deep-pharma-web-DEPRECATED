
'use client'
import Modal from '@/components/Modal';
import React, { useState } from 'react';


const HomePage: React.FC = () => {
  const [modalShow, setModalShow] = useState(true);

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal show={modalShow} onClose={closeModal}>
        <h2>Contenido del Modal</h2>
        <p>Este es un modal de ejemplo en Next.js con TypeScript.</p>
        <button onClick={closeModal}>cerrar </button>
      </Modal>
    </div>
  );
};

export default HomePage;

