/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.spoonacular.client/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.spoonacular.client/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpoonacularApi);
  }
}(this, function(expect, SpoonacularApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpoonacularApi.RecipesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RecipesApi', function() {
    describe('analyzeARecipeSearchQuery', function() {
      it('should call analyzeARecipeSearchQuery successfully', function(done) {
        //uncomment below and update the code to test analyzeARecipeSearchQuery
        //instance.analyzeARecipeSearchQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analyzeRecipeInstructions', function() {
      it('should call analyzeRecipeInstructions successfully', function(done) {
        //uncomment below and update the code to test analyzeRecipeInstructions
        //instance.analyzeRecipeInstructions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('autocompleteRecipeSearch', function() {
      it('should call autocompleteRecipeSearch successfully', function(done) {
        //uncomment below and update the code to test autocompleteRecipeSearch
        //instance.autocompleteRecipeSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('classifyCuisine', function() {
      it('should call classifyCuisine successfully', function(done) {
        //uncomment below and update the code to test classifyCuisine
        //instance.classifyCuisine(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('computeGlycemicLoad', function() {
      it('should call computeGlycemicLoad successfully', function(done) {
        //uncomment below and update the code to test computeGlycemicLoad
        //instance.computeGlycemicLoad(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertAmounts', function() {
      it('should call convertAmounts successfully', function(done) {
        //uncomment below and update the code to test convertAmounts
        //instance.convertAmounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRecipeCard', function() {
      it('should call createRecipeCard successfully', function(done) {
        //uncomment below and update the code to test createRecipeCard
        //instance.createRecipeCard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('equipmentByIDImage', function() {
      it('should call equipmentByIDImage successfully', function(done) {
        //uncomment below and update the code to test equipmentByIDImage
        //instance.equipmentByIDImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('extractRecipeFromWebsite', function() {
      it('should call extractRecipeFromWebsite successfully', function(done) {
        //uncomment below and update the code to test extractRecipeFromWebsite
        //instance.extractRecipeFromWebsite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAnalyzedRecipeInstructions', function() {
      it('should call getAnalyzedRecipeInstructions successfully', function(done) {
        //uncomment below and update the code to test getAnalyzedRecipeInstructions
        //instance.getAnalyzedRecipeInstructions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRandomRecipes', function() {
      it('should call getRandomRecipes successfully', function(done) {
        //uncomment below and update the code to test getRandomRecipes
        //instance.getRandomRecipes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipeEquipmentByID', function() {
      it('should call getRecipeEquipmentByID successfully', function(done) {
        //uncomment below and update the code to test getRecipeEquipmentByID
        //instance.getRecipeEquipmentByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipeInformation', function() {
      it('should call getRecipeInformation successfully', function(done) {
        //uncomment below and update the code to test getRecipeInformation
        //instance.getRecipeInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipeInformationBulk', function() {
      it('should call getRecipeInformationBulk successfully', function(done) {
        //uncomment below and update the code to test getRecipeInformationBulk
        //instance.getRecipeInformationBulk(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipeIngredientsByID', function() {
      it('should call getRecipeIngredientsByID successfully', function(done) {
        //uncomment below and update the code to test getRecipeIngredientsByID
        //instance.getRecipeIngredientsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipeNutritionWidgetByID', function() {
      it('should call getRecipeNutritionWidgetByID successfully', function(done) {
        //uncomment below and update the code to test getRecipeNutritionWidgetByID
        //instance.getRecipeNutritionWidgetByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipePriceBreakdownByID', function() {
      it('should call getRecipePriceBreakdownByID successfully', function(done) {
        //uncomment below and update the code to test getRecipePriceBreakdownByID
        //instance.getRecipePriceBreakdownByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecipeTasteByID', function() {
      it('should call getRecipeTasteByID successfully', function(done) {
        //uncomment below and update the code to test getRecipeTasteByID
        //instance.getRecipeTasteByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSimilarRecipes', function() {
      it('should call getSimilarRecipes successfully', function(done) {
        //uncomment below and update the code to test getSimilarRecipes
        //instance.getSimilarRecipes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('guessNutritionByDishName', function() {
      it('should call guessNutritionByDishName successfully', function(done) {
        //uncomment below and update the code to test guessNutritionByDishName
        //instance.guessNutritionByDishName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ingredientsByIDImage', function() {
      it('should call ingredientsByIDImage successfully', function(done) {
        //uncomment below and update the code to test ingredientsByIDImage
        //instance.ingredientsByIDImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('parseIngredients', function() {
      it('should call parseIngredients successfully', function(done) {
        //uncomment below and update the code to test parseIngredients
        //instance.parseIngredients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('priceBreakdownByIDImage', function() {
      it('should call priceBreakdownByIDImage successfully', function(done) {
        //uncomment below and update the code to test priceBreakdownByIDImage
        //instance.priceBreakdownByIDImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quickAnswer', function() {
      it('should call quickAnswer successfully', function(done) {
        //uncomment below and update the code to test quickAnswer
        //instance.quickAnswer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recipeNutritionByIDImage', function() {
      it('should call recipeNutritionByIDImage successfully', function(done) {
        //uncomment below and update the code to test recipeNutritionByIDImage
        //instance.recipeNutritionByIDImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recipeNutritionLabelImage', function() {
      it('should call recipeNutritionLabelImage successfully', function(done) {
        //uncomment below and update the code to test recipeNutritionLabelImage
        //instance.recipeNutritionLabelImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recipeNutritionLabelWidget', function() {
      it('should call recipeNutritionLabelWidget successfully', function(done) {
        //uncomment below and update the code to test recipeNutritionLabelWidget
        //instance.recipeNutritionLabelWidget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recipeTasteByIDImage', function() {
      it('should call recipeTasteByIDImage successfully', function(done) {
        //uncomment below and update the code to test recipeTasteByIDImage
        //instance.recipeTasteByIDImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRecipes', function() {
      it('should call searchRecipes successfully', function(done) {
        //uncomment below and update the code to test searchRecipes
        //instance.searchRecipes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRecipesByIngredients', function() {
      it('should call searchRecipesByIngredients successfully', function(done) {
        //uncomment below and update the code to test searchRecipesByIngredients
        //instance.searchRecipesByIngredients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRecipesByNutrients', function() {
      it('should call searchRecipesByNutrients successfully', function(done) {
        //uncomment below and update the code to test searchRecipesByNutrients
        //instance.searchRecipesByNutrients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('summarizeRecipe', function() {
      it('should call summarizeRecipe successfully', function(done) {
        //uncomment below and update the code to test summarizeRecipe
        //instance.summarizeRecipe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeEquipment', function() {
      it('should call visualizeEquipment successfully', function(done) {
        //uncomment below and update the code to test visualizeEquipment
        //instance.visualizeEquipment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizePriceBreakdown', function() {
      it('should call visualizePriceBreakdown successfully', function(done) {
        //uncomment below and update the code to test visualizePriceBreakdown
        //instance.visualizePriceBreakdown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipeEquipmentByID', function() {
      it('should call visualizeRecipeEquipmentByID successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipeEquipmentByID
        //instance.visualizeRecipeEquipmentByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipeIngredientsByID', function() {
      it('should call visualizeRecipeIngredientsByID successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipeIngredientsByID
        //instance.visualizeRecipeIngredientsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipeNutrition', function() {
      it('should call visualizeRecipeNutrition successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipeNutrition
        //instance.visualizeRecipeNutrition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipeNutritionByID', function() {
      it('should call visualizeRecipeNutritionByID successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipeNutritionByID
        //instance.visualizeRecipeNutritionByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipePriceBreakdownByID', function() {
      it('should call visualizeRecipePriceBreakdownByID successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipePriceBreakdownByID
        //instance.visualizeRecipePriceBreakdownByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipeTaste', function() {
      it('should call visualizeRecipeTaste successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipeTaste
        //instance.visualizeRecipeTaste(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('visualizeRecipeTasteByID', function() {
      it('should call visualizeRecipeTasteByID successfully', function(done) {
        //uncomment below and update the code to test visualizeRecipeTasteByID
        //instance.visualizeRecipeTasteByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));