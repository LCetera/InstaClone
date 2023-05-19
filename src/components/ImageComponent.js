import { View, Image, Dimensions } from 'react-native';

export default ImageComponent = ({ imageURI }) => (
  <View>
    <Image
      source={{
        uri: imageURI,
      }}
      style={{ width: Dimensions.get('window').width / 3, height: 150 }}
    />
  </View>
);
