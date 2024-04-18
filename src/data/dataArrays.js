export const categories = [
  
  {
    id: 1,
    name: 'Lunch',
    photo_url: 'https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?s=1024x1024&w=is&k=20&c=IzPnrDvP2_VumQARAcA7EuTifPfuA236bA4r70rppa0='
  },
  {
    id: 2,
    name: 'Dinner',
    photo_url:
      'https://media.istockphoto.com/id/996188546/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.jpg?s=1024x1024&w=is&k=20&c=jhz4cp7dONz1OEHTfMO2Ogw550LzOLHdvZ-8GBwPJ4k='
  },
  {
    id: 0,
    name: 'Breakfast',
    photo_url: 'https://media.istockphoto.com/id/1253203631/photo/south-indian-breakfast.jpg?s=1024x1024&w=is&k=20&c=uW6NTm0PIFp9zvr3egZB_A69z8oEHXfjaT93wRqxzYo='
  },
];

export const recipes = [
 
  
  
  
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Rice',
    photo_url: 'https://media.istockphoto.com/id/511873584/photo/delicous-homemade-chicken-curry-dish-with-rice.jpg?s=2048x2048&w=is&k=20&c=Kl4sVD4EMp4ij7dBa5J7ne2Zi27XP7NzaSZP8Lxkek0=',
    photosArray: [
      'https://media.istockphoto.com/id/511873584/photo/delicous-homemade-chicken-curry-dish-with-rice.jpg?s=2048x2048&w=is&k=20&c=Kl4sVD4EMp4ij7dBa5J7ne2Zi27XP7NzaSZP8Lxkek0=-prod/images/190307-fish-tacos-112-1553283299.jpg',
    ],
    time: '35',
    ingredients: [
      [0, '1 cup'],          // Rice
      [15, '1/2 teaspoon'],  // Garam Masala
      [16, '1/2 teaspoon']
    ],
    description:
      '-- In a medium saucepan, combine 1 cup of long-grain white rice with 2 cups of water. Optionally, add a pinch of salt to taste.\n\n-- Bring the water to a boil over high heat.\n\n-- Once boiling, reduce the heat to low and cover the saucepan with a tight-fitting lid.\n\n-- Simmer the rice, covered, for 18-20 minutes or until all the water is absorbed and the rice is tender.\n\n-- Remove the saucepan from the heat and let it sit, covered, for an additional 5 minutes to allow the rice to steam.\n\n -- Fluff the rice with a fork to separate the grains and release excess steam.\n\n-- Serve the cooked rice as a side dish with your favorite main course.\n\n'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Daal',
    photo_url:
      'https://media.istockphoto.com/id/495455834/photo/red-lentil-indian-soup-with-flat-bread-masoor-dal.jpg?s=2048x2048&w=is&k=20&c=vTMVJHImBFLCqKaNWsdqZokdEtms_JmX1iCQtKR28Ds=',
    photosArray: [
      'https://media.istockphoto.com/id/495455834/photo/red-lentil-indian-soup-with-flat-bread-masoor-dal.jpg?s=2048x2048&w=is&k=20&c=vTMVJHImBFLCqKaNWsdqZokdEtms_JmX1iCQtKR28Ds=.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    ],
    time: 35,
    ingredients: [
      [1, '1/2 cup'],        // Lentils (Daal)
  [2, '1 cup'],          // Wheat Flour (Atta)
  [3, '1/2 cup'],        // Paneer
  [13, '1 teaspoon'],    // Coriander powder
  [15, '1/2 teaspoon']
    ],
    description:
      
      '-- Rinse 1 cup of yellow split lentils (toor dal) under cold water until the water runs clear. Place the lentils in a bowl and cover with water, letting them soak for 30 minutes.\n\n-- In a pressure cooker or large pot, heat 2 tablespoons of ghee (clarified butter) or oil over medium heat.\n\n-- Add 1 teaspoon of cumin seeds and let them sizzle for a few seconds until aromatic.\n\n-- Stir in 1 finely chopped onion, 2 chopped tomatoes, 2 chopped green chilies (adjust to taste), and 1 tablespoon of grated ginger. Sauté until the onions are golden brown and tomatoes are softened.\n\n-- Drain the soaked lentils and add them to the pot along with 4 cups of water, 1 teaspoon of turmeric powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder (adjust to taste), and salt to taste.\n\n-- Close the pressure cooker lid and cook on high pressure for 8-10 minutes, or simmer in a pot until the lentils are soft and cooked through (about 20-25 minutes).\n\n-- Once cooked, open the lid carefully and stir the dal until creamy. Adjust the consistency by adding more water if needed.\n\n-- For tempering (tadka), heat 1 tablespoon of ghee in a small pan. Add 1 teaspoon of mustard seeds and let them splutter. Then add 2-3 dried red chilies, a pinch of asafoetida (hing), and a handful of curry leaves. Pour this tempering over the cooked dal and mix well.\n\n-- Garnish with fresh chopped coriander leaves and serve hot with steamed rice or Indian bread (roti/naan).\n\n'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Roti',
    photo_url:
      'https://media.istockphoto.com/id/1292638346/photo/chapati-isolated-over-a-rustic-wooden-background-selective-focus.jpg?s=2048x2048&w=is&k=20&c=nMYW6bHqgSLObYekJhnFdhqZ9gplJfJ8Bn-ZHZ3sbkY=',
    photosArray: [
      'https://media.istockphoto.com/id/1292638346/photo/chapati-isolated-over-a-rustic-wooden-background-selective-focus.jpg?s=2048x2048&w=is&k=20&c=nMYW6bHqgSLObYekJhnFdhqZ9gplJfJ8Bn-ZHZ3sbkY=.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    ],
    time: 50,
    ingredients: [
      [2, '1 cup'],          // Wheat Flour (Atta)
  [4, '2 tablespoons'],  // Ghee
  [12, '1/2 teaspoon']
    ],
    description:
      '-- In a mixing bowl, combine 2 cups of whole wheat flour and a pinch of salt.\n\n-- Gradually add water and knead until a smooth dough forms.\n\n-- Divide the dough into small balls and roll each ball into a thin circle using a rolling pin.\n\n-- Heat a skillet or tawa over medium-high heat.\n\n-- Place the rolled dough circle onto the hot skillet.\n\n-- Cook for about 30 seconds, then flip and cook the other side for another 30 seconds or until light golden brown spots appear.\n\n-- Remove from the skillet and lightly brush with ghee or butter.\n\n-- Repeat with the remaining dough balls.\n\n-- Serve hot rotis with your favorite curries or vegetables.\n\n'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Upma',
    photo_url: 'https://media.istockphoto.com/id/1422008793/photo/close-up-image-of-indian-breakfast-recipe-of-savoury-rava-upma-in-oven-proof-serving-dish.jpg?s=2048x2048&w=is&k=20&c=CPHE5m_G6PTN0qX_uQb82EHo6IK1h5pwU2Roms1hGCw=',
    photosArray: [
      'https://media.istockphoto.com/id/1422008793/photo/close-up-image-of-indian-breakfast-recipe-of-savoury-rava-upma-in-oven-proof-serving-dish.jpg?s=2048x2048&w=is&k=20&c=CPHE5m_G6PTN0qX_uQb82EHo6IK1h5pwU2Roms1hGCw=.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
    ],
    time: '15',
    ingredients: [[0, '1 cup'],          // Rice
    [1, '1/2 cup'],        // Lentils (Daal)
    [9, '1 cup'],          // Vegetables (for Upma)
    [10, '2-3'],           // Green chilies
    [11, '1/2 teaspoon'],  // Turmeric powder
    [12, '1/2 teaspoon'],  // Cumin seeds
    [14, '1/2 teaspoon']  ],
    description:
      '-- In a pan, heat 2 tablespoons of oil or ghee over medium heat.\n\n-- Add 1 teaspoon of mustard seeds and let them splutter.\n\n-- Add 1 finely chopped onion, 1-2 chopped green chilies, and a few curry leaves. Sauté until onions turn translucent.\n\n-- Add 1 cup of semolina (rava) and roast until it turns light golden brown and aromatic.\n\n-- Pour in 2 cups of water and mix well to avoid lumps.\n\n-- Season with salt to taste and stir continuously until the mixture thickens.\n\n-- Optionally, add chopped vegetables like carrots, peas, or bell peppers for extra flavor and nutrition.\n\n-- Cover and cook on low heat for 3-4 minutes until the upma is cooked and fluffy.\n\n-- Garnish with freshly chopped coriander leaves and serve hot with coconut chutney or pickle.\n\n'
  },
  {
    recipeId: 7,
    categoryId: 0,
    title: 'Dosa',
    photo_url: 'https://media.istockphoto.com/id/1303091718/photo/kerala-vegetarian-foods-dosa-with-curries.jpg?s=2048x2048&w=is&k=20&c=P0RwxTxpsQj21-TzlyRBaWZuCBUO6mSfP2bvLr3t4bk=',
    photosArray: [
      'https://media.istockphoto.com/id/1303091718/photo/kerala-vegetarian-foods-dosa-with-curries.jpg?s=2048x2048&w=is&k=20&c=P0RwxTxpsQj21-TzlyRBaWZuCBUO6mSfP2bvLr3t4bk=/655ce202-862-butternutsquashcarbonara-land.jpg',
    ],
    time: 15,
    ingredients: [
      [0, '1 cup'],          // Rice
  [5, '1/2 cup'],        // Urad Dal (for Dosa batter)
  [6, '1 teaspoon'],     // Mustard seeds
  [7, '6-8'],            // Curry leaves
  [11, '1/2 teaspoon'],  // Turmeric powder
  [12, '1/2 teaspoon'],  // Cumin seeds
  [14, '1/2 teaspoon']
    ],
    description:
      '-- Prepare the dosa batter by soaking 1 cup of rice, 1/2 cup of urad dal (black gram), and 1/4 teaspoon of fenugreek seeds in water for 6-8 hours.\n\n-- Drain the soaked ingredients and grind into a smooth batter using a blender or wet grinder, adding water as needed.\n\n-- Ferment the batter overnight or for 8-12 hours until it doubles in volume.\n\n-- Heat a non-stick or cast iron dosa tawa (griddle) over medium-high heat.\n\n-- Grease the tawa with a little oil or ghee.\n\n-- Pour a ladleful of dosa batter onto the hot tawa and spread it in a circular motion to form a thin crepe.\n\n-- Drizzle a little oil or ghee around the edges of the dosa.\n\n-- Cook until the underside turns golden brown and crisp.\n\n-- Flip the dosa and cook the other side for a minute.\n\n-- Serve hot dosas with coconut chutney, sambar, or potato masala.\n\n'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Paneer Butter Masala',
    photo_url: 'https://media.istockphoto.com/id/1327746667/photo/shahi-paneer-or-kadai-paneer.jpg?s=2048x2048&w=is&k=20&c=lt0PTTsW7i8E5a4lBvoCVLZ5ZDXdFwlGjqFNa3ripVw=',
    photosArray: [
      'https://media.istockphoto.com/id/1327746667/photo/shahi-paneer-or-kadai-paneer.jpg?s=2048x2048&w=is&k=20&c=lt0PTTsW7i8E5a4lBvoCVLZ5ZDXdFwlGjqFNa3ripVw=/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://media.istockphoto.com/id/1327746667/photo/shahi-paneer-or-kadai-paneer.jpg?s=2048x2048&w=is&k=20&c=lt0PTTsW7i8E5a4lBvoCVLZ5ZDXdFwlGjqFNa3ripVw=-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://media.istockphoto.com/id/1327746667/photo/shahi-paneer-or-kadai-paneer.jpg?s=2048x2048&w=is&k=20&c=lt0PTTsW7i8E5a4lBvoCVLZ5ZDXdFwlGjqFNa3ripVw=.jpg'
    ],
    time: 60,
    ingredients: [
      [3, '1/2 cup'],        // Paneer
  [4, '2 tablespoons'],  // Ghee
  [13, '1 teaspoon'],    // Coriander powder
  [15, '1/2 teaspoon'],  // Garam Masala
  [16, '1/2 cup']
    ],
    description:
      '-- Heat 2 tablespoons of butter or ghee in a pan over medium heat.\n\n-- Add 1 teaspoon of cumin seeds and let them splutter.\n\n-- Add 1 finely chopped onion, 2-3 garlic cloves, and a 1-inch piece of ginger. Sauté until onions turn golden brown.\n\n-- Add 3-4 chopped tomatoes and cook until they soften.\n\n-- Let the mixture cool slightly, then blend into a smooth paste.\n\n-- In the same pan, heat 1 tablespoon of butter or ghee.\n\n-- Add the blended tomato-onion paste and cook for a few minutes.\n\n-- Stir in 1 teaspoon of Kashmiri red chili powder, 1/2 teaspoon of turmeric powder, 1 teaspoon of coriander powder, and salt to taste.\n\n-- Add 200 grams of paneer cubes and mix gently.\n\n-- Pour in 1/2 cup of water and simmer for 5-7 minutes.\n\n-- Finish with 2 tablespoons of cream and a pinch of garam masala.\n\n-- Garnish with fresh coriander leaves and serve hot with naan or rice.\n\n'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Rice',
    photo_url: 'https://previews.123rf.com/images/subbotina/subbotina1506/subbotina150600235/40935096-close-up-of-cooked-white-rice-basmati-rice-texture-background.jpg'
  },
  {
    ingredientId: 1,
    name: 'Lentils (Daal)',
    photo_url: 'https://image.shutterstock.com/image-photo/close-dry-yellow-lentils-260nw-1563774754.jpg'
  },
  {
    ingredientId: 2,
    name: 'Wheat Flour (Atta)',
    photo_url: 'https://previews.123rf.com/images/lukeluke/lukeluke1204/lukeluke120400060/13261504-flour-or-atta-in-a-steel-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paneer',
    photo_url: 'https://image.shutterstock.com/image-photo/indian-fresh-paneer-cheese-cottage-260nw-1353842758.jpg'
  },
  {
    ingredientId: 4,
    name: 'Ghee',
    photo_url: 'https://image.shutterstock.com/image-photo/desk-top-view-indian-ghee-260nw-1091120387.jpg'
  },
  {
    ingredientId: 5,
    name: 'Urad Dal (for Dosa batter)',
    photo_url: 'https://image.shutterstock.com/image-photo/whole-black-gram-urad-sabut-260nw-1717168472.jpg'
  },
  {
    ingredientId: 6,
    name: 'Mustard seeds',
    photo_url: 'https://image.shutterstock.com/image-photo/yellow-mustard-seeds-macro-260nw-157180109.jpg'
  },
  {
    ingredientId: 7,
    name: 'Curry leaves',
    photo_url: 'https://image.shutterstock.com/image-photo/curry-leaves-leaf-murraya-koenigii-260nw-1356321960.jpg'
  },
  {
    ingredientId: 8,
    name: 'Chickpea Flour (Besan)',
    photo_url: 'https://image.shutterstock.com/image-photo/bowl-gram-flour-besan-over-260nw-1343368281.jpg'
  },
  {
    ingredientId: 9,
    name: 'Vegetables (for Upma)',
    photo_url: 'https://image.shutterstock.com/image-photo/fresh-vegetables-assortment-260nw-721739359.jpg'
  },
  {
    ingredientId: 10,
    name: 'Green chilies',
    photo_url: 'https://image.shutterstock.com/image-photo/green-chillies-260nw-1528666910.jpg'
  },
  {
    ingredientId: 11,
    name: 'Turmeric powder',
    photo_url: 'https://image.shutterstock.com/image-photo/turmeric-powder-260nw-382783271.jpg'
  },
  {
    ingredientId: 12,
    name: 'Cumin seeds',
    photo_url: 'https://image.shutterstock.com/image-photo/cumin-seeds-indian-spices-260nw-1193261696.jpg'
  },
  {
    ingredientId: 13,
    name: 'Coriander powder',
    photo_url: 'https://image.shutterstock.com/image-photo/coriander-seed-powder-indian-spice-260nw-193170013.jpg'
  },
  {
    ingredientId: 14,
    name: 'Tomatoes',
    photo_url: 'https://image.shutterstock.com/image-photo/fresh-tomatoes-on-white-background-260nw-569300924.jpg'
  },
  {
    ingredientId: 15,
    name: 'Garam Masala',
    photo_url: 'https://image.shutterstock.com/image-photo/garam-masala-indian-spices-260nw-367215525.jpg'
  },
  {
    ingredientId: 16,
    name: 'Yogurt (for marinating paneer)',
    photo_url: 'https://image.shutterstock.com/image-photo/natural-yogurt-on-white-background-260nw-152711865.jpg'
  }
];
