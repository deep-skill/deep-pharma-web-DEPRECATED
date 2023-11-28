'use client';

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
        {!user ? (
          <>
            <a
              href="/api/auth/login"
              className="w-60 text-center py-4 px-6 rounded-lg border-2 border-black"
            >
              Inicio de sesión
            </a>

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
      </section>
    </main>
  );
}
