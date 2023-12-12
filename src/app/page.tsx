'use client';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from './loading';
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;

  if (error != null) return <div>{error.message}</div>;

  return (
    <main className="w-full h-screen flex flex-col p-12">
      <h1 className="text-4xl font-semibold">DEEP PHARMA</h1>
      <section className="flex flex-grow justify-center items-center gap-6">
        {user == null ? (
          <>
            <Link
              href="/api/auth/login"
              className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
            >
              Inicio de sesión
            </Link>

            <Link
              href="/product-catalog"
              className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
            >
              Catálogo de productos
            </Link>
          </>
        ) : (
          <Link
            href="/home"
            className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
          >
            Home Page
          </Link>
        )}
        <Link
            href="forms/brand"
            className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
          >
            brands
          </Link>
        <Link
            href="forms/product"
            className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
          >
            product
          </Link>
        <Link
            href="forms/tag"
            className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
          >
            tag
          </Link>
      </section>
    </main>
  );
}
