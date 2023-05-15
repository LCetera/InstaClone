import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const NewsScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.rootContainer}>
      <Text style={{ color: colors.text }}>News Feed </Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
