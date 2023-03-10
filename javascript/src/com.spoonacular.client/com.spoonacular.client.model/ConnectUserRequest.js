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

/**
 * The ConnectUserRequest model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest
 * @version 1.1
 */
class ConnectUserRequest {
    /**
     * Constructs a new <code>ConnectUserRequest</code>.
     * 
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest
     * @param username {String} 
     * @param firstName {String} 
     * @param lastName {String} 
     * @param email {String} 
     */
    constructor(username, firstName, lastName, email) { 
        
        ConnectUserRequest.initialize(this, username, firstName, lastName, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, firstName, lastName, email) { 
        obj['username'] = username;
        obj['firstName'] = firstName;
        obj['lastName'] = lastName;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>ConnectUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest} The populated <code>ConnectUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectUserRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
ConnectUserRequest.prototype['username'] = undefined;

/**
 * @member {String} firstName
 */
ConnectUserRequest.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
ConnectUserRequest.prototype['lastName'] = undefined;

/**
 * @member {String} email
 */
ConnectUserRequest.prototype['email'] = undefined;






export default ConnectUserRequest;

