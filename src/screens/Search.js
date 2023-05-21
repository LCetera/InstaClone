import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ImageComponent from '../components/ImageComponent';
import { getPhotos } from '../services/photos';
import SearchBoxComponent from '../components/SearchBoxComponent';

const SearchScreen = () => {
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
      <SearchBoxComponent></SearchBoxComponent>
      <FlatList
        isLoading={isLoading}
        numColumns={3}
        data={albums}
        renderItem={({ item }) => {
          return <ImageComponent imageURI={item.thumbnailUrl} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default SearchScreen;
