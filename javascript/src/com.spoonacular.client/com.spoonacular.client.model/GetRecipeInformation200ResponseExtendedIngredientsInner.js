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
import GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures from './GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures';

/**
 * The GetRecipeInformation200ResponseExtendedIngredientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner
 * @version 1.1
 */
class GetRecipeInformation200ResponseExtendedIngredientsInner {
    /**
     * Constructs a new <code>GetRecipeInformation200ResponseExtendedIngredientsInner</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner
     * @param aisle {String} 
     * @param amount {Number} 
     * @param consitency {String} 
     * @param id {Number} 
     * @param image {String} 
     * @param name {String} 
     * @param original {String} 
     * @param originalName {String} 
     * @param unit {String} 
     */
    constructor(aisle, amount, consitency, id, image, name, original, originalName, unit) { 
        
        GetRecipeInformation200ResponseExtendedIngredientsInner.initialize(this, aisle, amount, consitency, id, image, name, original, originalName, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, aisle, amount, consitency, id, image, name, original, originalName, unit) { 
        obj['aisle'] = aisle;
        obj['amount'] = amount;
        obj['consitency'] = consitency;
        obj['id'] = id;
        obj['image'] = image;
        obj['name'] = name;
        obj['original'] = original;
        obj['originalName'] = originalName;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetRecipeInformation200ResponseExtendedIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner} The populated <code>GetRecipeInformation200ResponseExtendedIngredientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecipeInformation200ResponseExtendedIngredientsInner();

            if (data.hasOwnProperty('aisle')) {
                obj['aisle'] = ApiClient.convertToType(data['aisle'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('consitency')) {
                obj['consitency'] = ApiClient.convertToType(data['consitency'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('measures')) {
                obj['measures'] = GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures.constructFromObject(data['measures']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('originalName')) {
                obj['originalName'] = ApiClient.convertToType(data['originalName'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} aisle
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['aisle'] = undefined;

/**
 * @member {Number} amount
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['amount'] = undefined;

/**
 * @member {String} consitency
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['consitency'] = undefined;

/**
 * @member {Number} id
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['id'] = undefined;

/**
 * @member {String} image
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['image'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures} measures
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['measures'] = undefined;

/**
 * @member {Array.<String>} meta
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['meta'] = undefined;

/**
 * @member {String} name
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['name'] = undefined;

/**
 * @member {String} original
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['originalName'] = undefined;

/**
 * @member {String} unit
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['unit'] = undefined;






export default GetRecipeInformation200ResponseExtendedIngredientsInner;

