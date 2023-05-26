import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import PostComponent from '../components/PostComponent';
import TopContainerComponent from '../components/TopContainerComponent';
import { useFetch } from '../hooks/useFetch';

const NewsScreen = () => {
  const { albums, isLoading, isError } = useFetch();
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
