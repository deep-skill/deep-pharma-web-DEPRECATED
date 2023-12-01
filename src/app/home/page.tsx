'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Loading from '../loading';

const background: any = {
  Owner: 'bg-amber-500',
  Admin: 'bg-blue-500',
  Seller: 'bg-green-500',
};

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;

  return (
    user && (
      <div
        className={`flex flex-col p-4 gap-4 h-screen w-screen
      ${background[(user?.user_roles as Array<string>)[0]]}
      `}
      >
        <div className="flex justify-end gap-8">
          <a
            className="py-2 px-6 rounded-lg bg-sky-700 text-white"
            href="/api/auth/logout"
          >
            Log out
          </a>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="p-4 bg-white shadow-lg rounded">
            {user.picture != null && user.name != null && (
              <Image
                className="rounded-md w-full mb-6"
                src={user.picture}
                alt={user.name}
                width={300}
                height={300}
              />
            )}
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    )
  );
}
