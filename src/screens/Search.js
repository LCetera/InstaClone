import { View, StyleSheet, FlatList } from 'react-native';
import ImageComponent from '../components/ImageComponent';
import SearchBoxComponent from '../components/SearchBoxComponent';
import { useFetch } from '../hooks/useFetch';

const SearchScreen = () => {
  const { albums, isLoading, isError } = useFetch();

  return (
    <View style={styles.rootContainer}>
      <SearchBoxComponent></SearchBoxComponent>
      <FlatList
        isLoading={isLoading}
        isError={isError}
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
