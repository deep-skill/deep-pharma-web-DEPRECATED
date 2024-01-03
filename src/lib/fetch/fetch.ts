

export const getAllFetch = async (url: string , method : string, revalidate = 60 , tag? : string): Promise<any[]> => {
  try {

    let setCache = {}

    if (tag){
      setCache = { revalidate : revalidate , tags: [ tag ] }
    }else { 
      setCache = {revalidate : revalidate  }
    }


    const response = await fetch(`http://localhost:3000/api/${url}`, {
      method: method,
      next: setCache
    });
    console.log(response)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
