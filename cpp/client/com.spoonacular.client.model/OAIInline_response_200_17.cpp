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
 */


#include "OAIInline_response_200_17.h"

#include "OAIHelpers.h"

#include <QJsonDocument>
#include <QJsonArray>
#include <QObject>
#include <QDebug>

namespace OpenAPI {

OAIInline_response_200_17::OAIInline_response_200_17(QString json) {
    this->init();
    this->fromJson(json);
}

OAIInline_response_200_17::OAIInline_response_200_17() {
    this->init();
}

OAIInline_response_200_17::~OAIInline_response_200_17() {

}

void
OAIInline_response_200_17::init() {
    
    m_cuisine_isSet = false;
    m_cuisine_isValid = false;
    
    m_cuisines_isSet = false;
    m_cuisines_isValid = false;
    
    m_confidence_isSet = false;
    m_confidence_isValid = false;
    }

void
OAIInline_response_200_17::fromJson(QString jsonString) {
    QByteArray array (jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void
OAIInline_response_200_17::fromJsonObject(QJsonObject json) {
    
    m_cuisine_isValid = ::OpenAPI::fromJsonValue(cuisine, json[QString("cuisine")]);
    
    
    
    m_cuisines_isValid = ::OpenAPI::fromJsonValue(cuisines, json[QString("cuisines")]);
    
    m_confidence_isValid = ::OpenAPI::fromJsonValue(confidence, json[QString("confidence")]);
    
    
}

QString
OAIInline_response_200_17::asJson () const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject
OAIInline_response_200_17::asJsonObject() const {
    QJsonObject obj;
	if(m_cuisine_isSet){
        obj.insert(QString("cuisine"), ::OpenAPI::toJsonValue(cuisine));
    }
	
    if(cuisines.size() > 0){
        obj.insert(QString("cuisines"), ::OpenAPI::toJsonValue(cuisines));
    } 
	if(confidence.isSet()){
        obj.insert(QString("confidence"), ::OpenAPI::toJsonValue(confidence));
    }
    return obj;
}


QString
OAIInline_response_200_17::getCuisine() const {
    return cuisine;
}
void
OAIInline_response_200_17::setCuisine(const QString &cuisine) {
    this->cuisine = cuisine;
    this->m_cuisine_isSet = true;
}


QList<QString>
OAIInline_response_200_17::getCuisines() const {
    return cuisines;
}
void
OAIInline_response_200_17::setCuisines(const QList<QString> &cuisines) {
    this->cuisines = cuisines;
    this->m_cuisines_isSet = true;
}


OAINumber
OAIInline_response_200_17::getConfidence() const {
    return confidence;
}
void
OAIInline_response_200_17::setConfidence(const OAINumber &confidence) {
    this->confidence = confidence;
    this->m_confidence_isSet = true;
}

bool
OAIInline_response_200_17::isSet() const {
    bool isObjectUpdated = false;
    do{ 
        if(m_cuisine_isSet){ isObjectUpdated = true; break;}
    
        if(cuisines.size() > 0){ isObjectUpdated = true; break;}
    
        if(confidence.isSet()){ isObjectUpdated = true; break;}
    }while(false);
    return isObjectUpdated;
}

bool
OAIInline_response_200_17::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_cuisine_isValid && m_cuisines_isValid && m_confidence_isValid && true;
}

}
