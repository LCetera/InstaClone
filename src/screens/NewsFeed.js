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
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar></StatusBar>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontFamily: 'Lobster', fontSize: 30 }}>Instagram</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
        >
          <AntDesign name="plussquareo" size={24} color="black" />
          <AntDesign name="hearto" size={24} color="black" />
          <Feather name="send" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default NewsScreen;
