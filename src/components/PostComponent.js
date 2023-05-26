import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { AntDesign, Feather, Ionicons, EvilIcons } from '@expo/vector-icons';

const dimension = Dimensions.get('window');
const imageWidth = dimension.width;

export default PostComponent = ({ imageURI, title }) => (
  <View>
    <View style={styles.userContainer}>
      <EvilIcons name="user" style={styles.userIcon} />
      <Text style={styles.userText}>Clark Ederman</Text>
    </View>

    <Image
      source={{
        uri: imageURI,
      }}
      style={{ width: imageWidth, height: imageWidth }}
    />
    <View style={styles.postIconsContainer}>
      <View style={styles.postLeftIconsContainer}>
        <AntDesign name="hearto" style={styles.postLeftIconsStyle} />
        <Ionicons name="chatbubble-outline" style={styles.postLeftIconsStyle} />
        <Feather name="send" style={styles.postLeftIconsStyle} />
      </View>
      <Feather name="bookmark" style={styles.postRightIconsStyle} />
    </View>
    <View style={styles.postTextContainer}>
      <Text style={styles.postTextStyle}>123 456 wyświetleń</Text>
      <Text style={styles.postTextStyle}>{title}</Text>
      <Text style={styles.postComment}>Zobacz wszystkie komentarze: 80</Text>
    </View>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  userText: {
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 5,
  },
  userIcon: {
    fontSize: 48,
    color: 'black',
  },
  postIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  postLeftIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postLeftIconsStyle: {
    paddingRight: 5,
    fontSize: 20,
    color: 'black',
  },
  postRightIconsStyle: {
    fontSize: 20,
  },
  postTextContainer: {
    paddingHorizontal: 15,
  },
  postTextStyle: {
    fontSize: 16,
  },
  postComment: {
    fontSize: 14,
    opacity: 0.4,
    paddingVertical: 2,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
