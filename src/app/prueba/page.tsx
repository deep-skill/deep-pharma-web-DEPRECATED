import { getAccessToken, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const page = async () => {
  const { accessToken } = await getAccessToken();

  const response = await fetch("http://localhost:3001/admin/private", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    console.log(response);

    return (
      <div className="flex w-screen h-screen items-center  justify-center">
        User unauthorized
      </div>
    );
  }

  const data = await response.json();

  if (data) {
    return (
      <div className="flex w-screen h-screen items-center  justify-center">
        {data.message}
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen items-center  justify-center">
      Error
    </div>
  );
};

export default withPageAuthRequired(page);
