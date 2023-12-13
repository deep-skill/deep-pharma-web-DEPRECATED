import { useUser } from '@auth0/nextjs-auth0/client';

const MyComponent = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    // `user` contiene la información del usuario, incluyendo el access token
    const accessToken = user.idToken;
    console.log(accessToken);
    console.log(user);

    return (
    <p>Access Token: </p>
    );
  }

  return <p>No estás autenticado</p>;
};

export default MyComponent;
