import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBoxComponent = () => {
  return (
    <View style={styles.rootContainer}>
      <Ionicons name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },
  icon: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25,
  },
  input: {
    width: '94%',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
});

export default SearchBoxComponent;
