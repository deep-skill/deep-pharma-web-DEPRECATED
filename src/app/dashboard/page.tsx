'use client';
import { Button } from '@/stories/button/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <main className="flex flex-col w-full h-screen p-12">
      <h1 className="text-4xl font-semibold">DEEP PHARMA</h1>
      <h2 className="text-2xl font-medium">Administrador xxxx</h2>
      <section className="flex flex-row justify-center items-center flex-grow gap-6">
        <div className={`flex flex-col ${!dropdown && 'gap-4'}`}>
          <Button
            label="Ingresos"
            onClick={handleDropdown}
            primary
            size="large"
            backgroundColor={`${dropdown && '#B6D7A8'}`}
            style={`${dropdown && 'z-10'}`}
          />
          {dropdown && (
            <div className="flex flex-col gap-3 border-x-2 border-b-2 border-black rounded-b-lg justify-center mb-4 -translate-y-2 bg-[#92AC86]">
              <button
                className="pt-4 cursor-pointer"
                onClick={() => {
                  router.push('/');
                }}
              >
                Ingresar nueva compra
              </button>
              <div className="border-black border-b-2 mx-4 rounded-full"></div>
              <button
                className="pb-3 cursor-pointer"
                onClick={() => {
                  router.push('/');
                }}
              >
                Ingreso/ Salida de productos
              </button>
            </div>
          )}
          <Button
            label="Catálogo y venta de productos"
            onClick={() => {}}
            primary
            size="large"
            style={`${dropdown && ' mb-4'}`}
          />
          <Button
            label="Apertura/ Cierre de caja"
            onClick={() => {}}
            primary
            size="large"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            label="Administración genera"
            onClick={() => {}}
            primary
            size="large"
          />
          <Button
            label="Productos rechazados o devueltos"
            onClick={() => {}}
            primary
            size="large"
          />
          <Button
            label="Mover mercadería"
            onClick={() => {}}
            primary
            size="large"
          />
        </div>
      </section>
    </main>
  );
}
