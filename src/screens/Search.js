import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

const SearchScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.rootContainer}>
      <Text>Search</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
