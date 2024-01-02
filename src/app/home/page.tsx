import { getAccessToken } from '@auth0/nextjs-auth0';
import { decodeToken } from '@/lib/decodeToken';
import GridProducts from '@/components/products/GridProducts';

const fetchData = async () => {
  try {
    const result = await fetch(`http://localhost:3001/product`);
    console.log(result);
    return await result.json();
  } catch (error) {
    throw new Error(`something went wrong: ${error}`);
  }
};
const HomePage = async () => {
  const data = await fetchData();
  console.log(data);
  const { accessToken } = await getAccessToken();
  const rol = decodeToken(accessToken);

  return (
    <div>
      <h1>Productos Destacados</h1>
      {rol}
      <GridProducts products={data} />
    </div>
  );
};

export default HomePage;
