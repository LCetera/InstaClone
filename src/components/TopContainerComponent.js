import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

const TopContainerComponent = () => {
  return (
    <View style={styles.instagramContainer}>
      <View style={styles.leftPartOfInstagram}>
        <Text style={styles.leftInstagramText}>Instagram</Text>
      </View>
      <View style={styles.rightPartOfInstagram}>
        <AntDesign name="plussquareo" style={styles.icons} />
        <AntDesign name="hearto" style={styles.icons} />
        <Feather name="send" style={styles.icons} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  icons: {
    paddingRight: 5,
    fontSize: 24,
    color: 'black',
  },
});

export default TopContainerComponent;
