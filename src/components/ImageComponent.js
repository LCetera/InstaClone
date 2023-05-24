import { View, Image, Dimensions } from 'react-native';

const dimension = Dimensions.get('window');
const imageWidth = dimension.width / 3;

export default ImageComponent = ({ imageURI }) => (
  <View>
    <Image
      source={{
        uri: imageURI,
      }}
      style={{ width: imageWidth, height: imageWidth }}
    />
  </View>
);
