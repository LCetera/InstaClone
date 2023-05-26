import { useEffect, useState } from 'react';
import { getPhotos } from '../services/photos';

export function useFetch() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      setLoading(true);
      getPhotos()
        .then((newAlbums) => {
          setAlbums(newAlbums);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchAlbums();
  }, []);

  return { albums, isLoading, isError };
}
