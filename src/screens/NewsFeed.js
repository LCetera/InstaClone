import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AntDesign, Feather } from '@expo/vector-icons';

const NewsScreen = () => {
  const { colors } = useTheme();
  const [fontsLoaded] = useFonts({
    Lobster: require('../../assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.rootContainer}>
      <StatusBar></StatusBar>
      <View style={styles.instagramContainer}>
        <View style={styles.leftPartOfInstagram}>
          <Text style={styles.leftInstagramText}>Instagram</Text>
        </View>
        <View style={styles.rightPartOfInstagram}>
          <AntDesign name="plussquareo" size={24} color="black" />
          <AntDesign name="hearto" size={24} color="black" />
          <Feather name="send" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  instagramContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftPartOfInstagram: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  leftInstagramText: {
    fontFamily: 'Lobster',
    fontSize: 30,
  },
  rightPartOfInstagram: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default NewsScreen;
