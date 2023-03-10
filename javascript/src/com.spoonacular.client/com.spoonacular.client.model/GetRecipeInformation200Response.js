/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetRecipeInformation200ResponseExtendedIngredientsInner from './GetRecipeInformation200ResponseExtendedIngredientsInner';
import GetRecipeInformation200ResponseWinePairing from './GetRecipeInformation200ResponseWinePairing';

/**
 * The GetRecipeInformation200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200Response
 * @version 1.1
 */
class GetRecipeInformation200Response {
    /**
     * Constructs a new <code>GetRecipeInformation200Response</code>.
     * 
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200Response
     * @param id {Number} 
     * @param title {String} 
     * @param image {String} 
     * @param imageType {String} 
     * @param servings {Number} 
     * @param readyInMinutes {Number} 
     * @param license {String} 
     * @param sourceName {String} 
     * @param sourceUrl {String} 
     * @param spoonacularSourceUrl {String} 
     * @param aggregateLikes {Number} 
     * @param healthScore {Number} 
     * @param spoonacularScore {Number} 
     * @param pricePerServing {Number} 
     * @param analyzedInstructions {Array.<Object>} 
     * @param cheap {Boolean} 
     * @param creditsText {String} 
     * @param cuisines {Array.<String>} 
     * @param dairyFree {Boolean} 
     * @param diets {Array.<String>} 
     * @param gaps {String} 
     * @param glutenFree {Boolean} 
     * @param instructions {String} 
     * @param ketogenic {Boolean} 
     * @param lowFodmap {Boolean} 
     * @param occasions {Array.<String>} 
     * @param sustainable {Boolean} 
     * @param vegan {Boolean} 
     * @param vegetarian {Boolean} 
     * @param veryHealthy {Boolean} 
     * @param veryPopular {Boolean} 
     * @param whole30 {Boolean} 
     * @param weightWatcherSmartPoints {Number} 
     * @param dishTypes {Array.<String>} 
     * @param extendedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner>} 
     * @param summary {String} 
     * @param winePairing {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} 
     */
    constructor(id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing) { 
        
        GetRecipeInformation200Response.initialize(this, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['image'] = image;
        obj['imageType'] = imageType;
        obj['servings'] = servings;
        obj['readyInMinutes'] = readyInMinutes;
        obj['license'] = license;
        obj['sourceName'] = sourceName;
        obj['sourceUrl'] = sourceUrl;
        obj['spoonacularSourceUrl'] = spoonacularSourceUrl;
        obj['aggregateLikes'] = aggregateLikes;
        obj['healthScore'] = healthScore;
        obj['spoonacularScore'] = spoonacularScore;
        obj['pricePerServing'] = pricePerServing;
        obj['analyzedInstructions'] = analyzedInstructions;
        obj['cheap'] = cheap;
        obj['creditsText'] = creditsText;
        obj['cuisines'] = cuisines;
        obj['dairyFree'] = dairyFree;
        obj['diets'] = diets;
        obj['gaps'] = gaps;
        obj['glutenFree'] = glutenFree;
        obj['instructions'] = instructions;
        obj['ketogenic'] = ketogenic;
        obj['lowFodmap'] = lowFodmap;
        obj['occasions'] = occasions;
        obj['sustainable'] = sustainable;
        obj['vegan'] = vegan;
        obj['vegetarian'] = vegetarian;
        obj['veryHealthy'] = veryHealthy;
        obj['veryPopular'] = veryPopular;
        obj['whole30'] = whole30;
        obj['weightWatcherSmartPoints'] = weightWatcherSmartPoints;
        obj['dishTypes'] = dishTypes;
        obj['extendedIngredients'] = extendedIngredients;
        obj['summary'] = summary;
        obj['winePairing'] = winePairing;
    }

    /**
     * Constructs a <code>GetRecipeInformation200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200Response} The populated <code>GetRecipeInformation200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecipeInformation200Response();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('servings')) {
                obj['servings'] = ApiClient.convertToType(data['servings'], 'Number');
            }
            if (data.hasOwnProperty('readyInMinutes')) {
                obj['readyInMinutes'] = ApiClient.convertToType(data['readyInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], 'String');
            }
            if (data.hasOwnProperty('sourceName')) {
                obj['sourceName'] = ApiClient.convertToType(data['sourceName'], 'String');
            }
            if (data.hasOwnProperty('sourceUrl')) {
                obj['sourceUrl'] = ApiClient.convertToType(data['sourceUrl'], 'String');
            }
            if (data.hasOwnProperty('spoonacularSourceUrl')) {
                obj['spoonacularSourceUrl'] = ApiClient.convertToType(data['spoonacularSourceUrl'], 'String');
            }
            if (data.hasOwnProperty('aggregateLikes')) {
                obj['aggregateLikes'] = ApiClient.convertToType(data['aggregateLikes'], 'Number');
            }
            if (data.hasOwnProperty('healthScore')) {
                obj['healthScore'] = ApiClient.convertToType(data['healthScore'], 'Number');
            }
            if (data.hasOwnProperty('spoonacularScore')) {
                obj['spoonacularScore'] = ApiClient.convertToType(data['spoonacularScore'], 'Number');
            }
            if (data.hasOwnProperty('pricePerServing')) {
                obj['pricePerServing'] = ApiClient.convertToType(data['pricePerServing'], 'Number');
            }
            if (data.hasOwnProperty('analyzedInstructions')) {
                obj['analyzedInstructions'] = ApiClient.convertToType(data['analyzedInstructions'], [Object]);
            }
            if (data.hasOwnProperty('cheap')) {
                obj['cheap'] = ApiClient.convertToType(data['cheap'], 'Boolean');
            }
            if (data.hasOwnProperty('creditsText')) {
                obj['creditsText'] = ApiClient.convertToType(data['creditsText'], 'String');
            }
            if (data.hasOwnProperty('cuisines')) {
                obj['cuisines'] = ApiClient.convertToType(data['cuisines'], ['String']);
            }
            if (data.hasOwnProperty('dairyFree')) {
                obj['dairyFree'] = ApiClient.convertToType(data['dairyFree'], 'Boolean');
            }
            if (data.hasOwnProperty('diets')) {
                obj['diets'] = ApiClient.convertToType(data['diets'], ['String']);
            }
            if (data.hasOwnProperty('gaps')) {
                obj['gaps'] = ApiClient.convertToType(data['gaps'], 'String');
            }
            if (data.hasOwnProperty('glutenFree')) {
                obj['glutenFree'] = ApiClient.convertToType(data['glutenFree'], 'Boolean');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('ketogenic')) {
                obj['ketogenic'] = ApiClient.convertToType(data['ketogenic'], 'Boolean');
            }
            if (data.hasOwnProperty('lowFodmap')) {
                obj['lowFodmap'] = ApiClient.convertToType(data['lowFodmap'], 'Boolean');
            }
            if (data.hasOwnProperty('occasions')) {
                obj['occasions'] = ApiClient.convertToType(data['occasions'], ['String']);
            }
            if (data.hasOwnProperty('sustainable')) {
                obj['sustainable'] = ApiClient.convertToType(data['sustainable'], 'Boolean');
            }
            if (data.hasOwnProperty('vegan')) {
                obj['vegan'] = ApiClient.convertToType(data['vegan'], 'Boolean');
            }
            if (data.hasOwnProperty('vegetarian')) {
                obj['vegetarian'] = ApiClient.convertToType(data['vegetarian'], 'Boolean');
            }
            if (data.hasOwnProperty('veryHealthy')) {
                obj['veryHealthy'] = ApiClient.convertToType(data['veryHealthy'], 'Boolean');
            }
            if (data.hasOwnProperty('veryPopular')) {
                obj['veryPopular'] = ApiClient.convertToType(data['veryPopular'], 'Boolean');
            }
            if (data.hasOwnProperty('whole30')) {
                obj['whole30'] = ApiClient.convertToType(data['whole30'], 'Boolean');
            }
            if (data.hasOwnProperty('weightWatcherSmartPoints')) {
                obj['weightWatcherSmartPoints'] = ApiClient.convertToType(data['weightWatcherSmartPoints'], 'Number');
            }
            if (data.hasOwnProperty('dishTypes')) {
                obj['dishTypes'] = ApiClient.convertToType(data['dishTypes'], ['String']);
            }
            if (data.hasOwnProperty('extendedIngredients')) {
                obj['extendedIngredients'] = ApiClient.convertToType(data['extendedIngredients'], [GetRecipeInformation200ResponseExtendedIngredientsInner]);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('winePairing')) {
                obj['winePairing'] = GetRecipeInformation200ResponseWinePairing.constructFromObject(data['winePairing']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecipeInformation200Response.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetRecipeInformation200Response.prototype['title'] = undefined;

/**
 * @member {String} image
 */
GetRecipeInformation200Response.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
GetRecipeInformation200Response.prototype['imageType'] = undefined;

/**
 * @member {Number} servings
 */
GetRecipeInformation200Response.prototype['servings'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
GetRecipeInformation200Response.prototype['readyInMinutes'] = undefined;

/**
 * @member {String} license
 */
GetRecipeInformation200Response.prototype['license'] = undefined;

/**
 * @member {String} sourceName
 */
GetRecipeInformation200Response.prototype['sourceName'] = undefined;

/**
 * @member {String} sourceUrl
 */
GetRecipeInformation200Response.prototype['sourceUrl'] = undefined;

/**
 * @member {String} spoonacularSourceUrl
 */
GetRecipeInformation200Response.prototype['spoonacularSourceUrl'] = undefined;

/**
 * @member {Number} aggregateLikes
 */
GetRecipeInformation200Response.prototype['aggregateLikes'] = undefined;

/**
 * @member {Number} healthScore
 */
GetRecipeInformation200Response.prototype['healthScore'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
GetRecipeInformation200Response.prototype['spoonacularScore'] = undefined;

/**
 * @member {Number} pricePerServing
 */
GetRecipeInformation200Response.prototype['pricePerServing'] = undefined;

/**
 * @member {Array.<Object>} analyzedInstructions
 */
GetRecipeInformation200Response.prototype['analyzedInstructions'] = undefined;

/**
 * @member {Boolean} cheap
 */
GetRecipeInformation200Response.prototype['cheap'] = undefined;

/**
 * @member {String} creditsText
 */
GetRecipeInformation200Response.prototype['creditsText'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
GetRecipeInformation200Response.prototype['cuisines'] = undefined;

/**
 * @member {Boolean} dairyFree
 */
GetRecipeInformation200Response.prototype['dairyFree'] = undefined;

/**
 * @member {Array.<String>} diets
 */
GetRecipeInformation200Response.prototype['diets'] = undefined;

/**
 * @member {String} gaps
 */
GetRecipeInformation200Response.prototype['gaps'] = undefined;

/**
 * @member {Boolean} glutenFree
 */
GetRecipeInformation200Response.prototype['glutenFree'] = undefined;

/**
 * @member {String} instructions
 */
GetRecipeInformation200Response.prototype['instructions'] = undefined;

/**
 * @member {Boolean} ketogenic
 */
GetRecipeInformation200Response.prototype['ketogenic'] = undefined;

/**
 * @member {Boolean} lowFodmap
 */
GetRecipeInformation200Response.prototype['lowFodmap'] = undefined;

/**
 * @member {Array.<String>} occasions
 */
GetRecipeInformation200Response.prototype['occasions'] = undefined;

/**
 * @member {Boolean} sustainable
 */
GetRecipeInformation200Response.prototype['sustainable'] = undefined;

/**
 * @member {Boolean} vegan
 */
GetRecipeInformation200Response.prototype['vegan'] = undefined;

/**
 * @member {Boolean} vegetarian
 */
GetRecipeInformation200Response.prototype['vegetarian'] = undefined;

/**
 * @member {Boolean} veryHealthy
 */
GetRecipeInformation200Response.prototype['veryHealthy'] = undefined;

/**
 * @member {Boolean} veryPopular
 */
GetRecipeInformation200Response.prototype['veryPopular'] = undefined;

/**
 * @member {Boolean} whole30
 */
GetRecipeInformation200Response.prototype['whole30'] = undefined;

/**
 * @member {Number} weightWatcherSmartPoints
 */
GetRecipeInformation200Response.prototype['weightWatcherSmartPoints'] = undefined;

/**
 * @member {Array.<String>} dishTypes
 */
GetRecipeInformation200Response.prototype['dishTypes'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner>} extendedIngredients
 */
GetRecipeInformation200Response.prototype['extendedIngredients'] = undefined;

/**
 * @member {String} summary
 */
GetRecipeInformation200Response.prototype['summary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} winePairing
 */
GetRecipeInformation200Response.prototype['winePairing'] = undefined;






export default GetRecipeInformation200Response;

