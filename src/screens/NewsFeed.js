import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { useFonts } from 'expo-font';

import { getPhotos } from '../services/photos';
import PostComponent from '../components/PostComponent';
import TopContainerComponent from '../components/TopContainerComponent';

const NewsScreen = () => {
  const [fontsLoaded] = useFonts({
    Lobster: require('../../assets/fonts/Lobster-Regular.ttf'),
  });

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

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
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
