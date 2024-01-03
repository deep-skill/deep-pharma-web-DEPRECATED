'use client'
import React, { useState, useEffect } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import { fetchToken } from '@/lib/fetch/fetchToken';

const HomePage = () => {
  const { user, error, isLoading } = useUser();
  

  useEffect(() => {
    const getToken = async () => {
      if (user) {
        try {
          await fetchToken();
        } catch (err) {
          console.error('Error al obtener el token:', err);
        }
      }
    };

    getToken();
  }, [user]);



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div>Hello {user?.name}</div>
    </div>
  );
};

export default HomePage;