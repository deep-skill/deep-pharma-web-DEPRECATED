'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  if (error != null) return <div>{error.message}</div>;

  const styleLink =
    'text-center py-2 px-2 rounded-lg border-2 hover:bg-slate-200 border-black';

  return (
    <nav className="flex flex-row  m-2 p-2 justify-between gap-2">
      <h1 className="text-4xl font-semibold">
        <Link href="/">DEEP PHARMA</Link>
      </h1>
      <div className="flex gap-2">
        {user == null ? (
          <>
            <Link href="/api/auth/login" className={styleLink}>
              Inicio de sesión
            </Link>
            <Link href="/product-catalog" className={styleLink}>
              Catálogo de productos
            </Link>
          </>
        ) : (
          <Link href="/home" className={styleLink}>
            Home Page
          </Link>
        )}
        <Link href="forms/brand" className={styleLink}>
          Brands
        </Link>
        <Link href="forms/product" className={styleLink}>
          Product
        </Link>
        <Link href="forms/tag" className={styleLink}>
          Tag
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
