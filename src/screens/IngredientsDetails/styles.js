import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const numColumns = 2;
const itemWidth = width / numColumns;
const itemHeight = itemWidth * 1.2; // Adjust the aspect ratio as needed

const styles = StyleSheet.create({
  container: {
    width: itemWidth - 20, // Adjust margin and padding for spacing
    height: itemHeight - 20, // Adjust margin and padding for spacing
    margin: 10,
    borderRadius: 12,
    overflow: 'hidden', // Clip content to rounded corners
    backgroundColor: '#FFFFFF', // White background color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  photo: {
    width: '100%',
    height: '70%', // Adjust the image height percentage
    resizeMode: 'cover', // Cover mode for image resizing
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    padding: 12,
  },
});

export default styles;
