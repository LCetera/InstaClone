const URL = 'https://jsonplaceholder.typicode.com/photos';

// async await syntax
export const getPhotos = async () => {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch (e) {
    alert(e);
  }
};
