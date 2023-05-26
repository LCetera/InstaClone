import { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';

import { getPhotos } from '../services/photos';
import PostComponent from '../components/PostComponent';
import TopContainerComponent from '../components/TopContainerComponent';

const NewsScreen = () => {
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

  return (
    <View style={styles.rootContainer}>
      <StatusBar></StatusBar>
      <TopContainerComponent></TopContainerComponent>
      <FlatList
        isLoading={isLoading}
        isError={isError}
        data={albums}
        renderItem={({ item }) => {
          return <PostComponent imageURI={item.url} title={item.title} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default NewsScreen;
