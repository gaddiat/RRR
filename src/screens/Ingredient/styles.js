import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5', // Light gray background color
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  titleIngredient: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Dark gray text color
    marginBottom: 12,
    textAlign: 'center',
  },
  photoIngredient: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  ingredientInfo: {
    fontSize: 16,
    color: '#666666', // Medium gray text color
    marginBottom: 8,
    textAlign: 'left',
  },
});

export default styles;
