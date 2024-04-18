import { StyleSheet, Dimensions } from 'react-native';

// Screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColumns = 2;
const RECIPE_ITEM_MARGIN = 10;
const RECIPE_ITEM_WIDTH = (SCREEN_WIDTH - (recipeNumColumns + 1) * RECIPE_ITEM_MARGIN) / recipeNumColumns;
const RECIPE_ITEM_HEIGHT = RECIPE_ITEM_WIDTH * 1.2; // Adjusted height based on width ratio

const styles = StyleSheet.create({
  container: {
    width: RECIPE_ITEM_WIDTH,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3, // Android shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2, // iOS shadow effect
  },
  photo: {
    width: '100%',
    height: RECIPE_ITEM_HEIGHT,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden', // Ensure photo corners are rounded
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  category: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 12,
  },
});

export default styles;
