import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    borderRadius: 12,
    backgroundColor: '#FFFFFF', // White background color
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  categoriesPhoto: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  categoriesName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 8,
  },
  categoriesInfo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
  },
});

export default styles;
