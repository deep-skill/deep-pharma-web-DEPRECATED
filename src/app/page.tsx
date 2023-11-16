"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const background: any = {
  Owner: "bg-amber-500",
  Admin: "bg-blue-500",
  Seller: "bg-green-500",
};

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        Loading...
      </div>
    );
  if (error) return <div>{error.message}</div>;

  if (user) {
    const roles: any = user.user_roles;

    return (
      <div
        className={`flex flex-col p-4 gap-4 h-screen w-screen 
          ${background[roles[0]]}
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
            {user.picture && user.name && (
              <img
                className="rounded-md w-full mb-6"
                src={user.picture}
                alt={user.name}
              />
            )}
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col py-10 gap-4 items-center justify-center h-screen w-screen`}
    >
      <h1 className="text-3xl">Deep Pharma</h1>

      <a
        className="py-2 px-6 rounded-lg bg-sky-600 text-gray-300"
        href="/api/auth/login"
      >
        Login
      </a>
    </div>
  );
}
