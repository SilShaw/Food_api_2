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


#include "OAIInline_response_200_3.h"

#include "OAIHelpers.h"

#include <QJsonDocument>
#include <QJsonArray>
#include <QObject>
#include <QDebug>

namespace OpenAPI {

OAIInline_response_200_3::OAIInline_response_200_3(QString json) {
    this->init();
    this->fromJson(json);
}

OAIInline_response_200_3::OAIInline_response_200_3() {
    this->init();
}

OAIInline_response_200_3::~OAIInline_response_200_3() {

}

void
OAIInline_response_200_3::init() {
    
    m_id_isSet = false;
    m_id_isValid = false;
    
    m_title_isSet = false;
    m_title_isValid = false;
    
    m_image_isSet = false;
    m_image_isValid = false;
    
    m_image_type_isSet = false;
    m_image_type_isValid = false;
    
    m_servings_isSet = false;
    m_servings_isValid = false;
    
    m_ready_in_minutes_isSet = false;
    m_ready_in_minutes_isValid = false;
    
    m_license_isSet = false;
    m_license_isValid = false;
    
    m_source_name_isSet = false;
    m_source_name_isValid = false;
    
    m_source_url_isSet = false;
    m_source_url_isValid = false;
    
    m_spoonacular_source_url_isSet = false;
    m_spoonacular_source_url_isValid = false;
    
    m_aggregate_likes_isSet = false;
    m_aggregate_likes_isValid = false;
    
    m_health_score_isSet = false;
    m_health_score_isValid = false;
    
    m_spoonacular_score_isSet = false;
    m_spoonacular_score_isValid = false;
    
    m_price_per_serving_isSet = false;
    m_price_per_serving_isValid = false;
    
    m_analyzed_instructions_isSet = false;
    m_analyzed_instructions_isValid = false;
    
    m_cheap_isSet = false;
    m_cheap_isValid = false;
    
    m_credits_text_isSet = false;
    m_credits_text_isValid = false;
    
    m_cuisines_isSet = false;
    m_cuisines_isValid = false;
    
    m_dairy_free_isSet = false;
    m_dairy_free_isValid = false;
    
    m_diets_isSet = false;
    m_diets_isValid = false;
    
    m_gaps_isSet = false;
    m_gaps_isValid = false;
    
    m_gluten_free_isSet = false;
    m_gluten_free_isValid = false;
    
    m_instructions_isSet = false;
    m_instructions_isValid = false;
    
    m_ketogenic_isSet = false;
    m_ketogenic_isValid = false;
    
    m_low_fodmap_isSet = false;
    m_low_fodmap_isValid = false;
    
    m_occasions_isSet = false;
    m_occasions_isValid = false;
    
    m_sustainable_isSet = false;
    m_sustainable_isValid = false;
    
    m_vegan_isSet = false;
    m_vegan_isValid = false;
    
    m_vegetarian_isSet = false;
    m_vegetarian_isValid = false;
    
    m_very_healthy_isSet = false;
    m_very_healthy_isValid = false;
    
    m_very_popular_isSet = false;
    m_very_popular_isValid = false;
    
    m_whole30_isSet = false;
    m_whole30_isValid = false;
    
    m_weight_watcher_smart_points_isSet = false;
    m_weight_watcher_smart_points_isValid = false;
    
    m_dish_types_isSet = false;
    m_dish_types_isValid = false;
    
    m_extended_ingredients_isSet = false;
    m_extended_ingredients_isValid = false;
    
    m_summary_isSet = false;
    m_summary_isValid = false;
    
    m_wine_pairing_isSet = false;
    m_wine_pairing_isValid = false;
    }

void
OAIInline_response_200_3::fromJson(QString jsonString) {
    QByteArray array (jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void
OAIInline_response_200_3::fromJsonObject(QJsonObject json) {
    
    m_id_isValid = ::OpenAPI::fromJsonValue(id, json[QString("id")]);
    
    
    m_title_isValid = ::OpenAPI::fromJsonValue(title, json[QString("title")]);
    
    
    m_image_isValid = ::OpenAPI::fromJsonValue(image, json[QString("image")]);
    
    
    m_image_type_isValid = ::OpenAPI::fromJsonValue(image_type, json[QString("imageType")]);
    
    
    m_servings_isValid = ::OpenAPI::fromJsonValue(servings, json[QString("servings")]);
    
    
    m_ready_in_minutes_isValid = ::OpenAPI::fromJsonValue(ready_in_minutes, json[QString("readyInMinutes")]);
    
    
    m_license_isValid = ::OpenAPI::fromJsonValue(license, json[QString("license")]);
    
    
    m_source_name_isValid = ::OpenAPI::fromJsonValue(source_name, json[QString("sourceName")]);
    
    
    m_source_url_isValid = ::OpenAPI::fromJsonValue(source_url, json[QString("sourceUrl")]);
    
    
    m_spoonacular_source_url_isValid = ::OpenAPI::fromJsonValue(spoonacular_source_url, json[QString("spoonacularSourceUrl")]);
    
    
    m_aggregate_likes_isValid = ::OpenAPI::fromJsonValue(aggregate_likes, json[QString("aggregateLikes")]);
    
    
    m_health_score_isValid = ::OpenAPI::fromJsonValue(health_score, json[QString("healthScore")]);
    
    
    m_spoonacular_score_isValid = ::OpenAPI::fromJsonValue(spoonacular_score, json[QString("spoonacularScore")]);
    
    
    m_price_per_serving_isValid = ::OpenAPI::fromJsonValue(price_per_serving, json[QString("pricePerServing")]);
    
    
    
    m_analyzed_instructions_isValid = ::OpenAPI::fromJsonValue(analyzed_instructions, json[QString("analyzedInstructions")]);
    
    m_cheap_isValid = ::OpenAPI::fromJsonValue(cheap, json[QString("cheap")]);
    
    
    m_credits_text_isValid = ::OpenAPI::fromJsonValue(credits_text, json[QString("creditsText")]);
    
    
    
    m_cuisines_isValid = ::OpenAPI::fromJsonValue(cuisines, json[QString("cuisines")]);
    
    m_dairy_free_isValid = ::OpenAPI::fromJsonValue(dairy_free, json[QString("dairyFree")]);
    
    
    
    m_diets_isValid = ::OpenAPI::fromJsonValue(diets, json[QString("diets")]);
    
    m_gaps_isValid = ::OpenAPI::fromJsonValue(gaps, json[QString("gaps")]);
    
    
    m_gluten_free_isValid = ::OpenAPI::fromJsonValue(gluten_free, json[QString("glutenFree")]);
    
    
    m_instructions_isValid = ::OpenAPI::fromJsonValue(instructions, json[QString("instructions")]);
    
    
    m_ketogenic_isValid = ::OpenAPI::fromJsonValue(ketogenic, json[QString("ketogenic")]);
    
    
    m_low_fodmap_isValid = ::OpenAPI::fromJsonValue(low_fodmap, json[QString("lowFodmap")]);
    
    
    
    m_occasions_isValid = ::OpenAPI::fromJsonValue(occasions, json[QString("occasions")]);
    
    m_sustainable_isValid = ::OpenAPI::fromJsonValue(sustainable, json[QString("sustainable")]);
    
    
    m_vegan_isValid = ::OpenAPI::fromJsonValue(vegan, json[QString("vegan")]);
    
    
    m_vegetarian_isValid = ::OpenAPI::fromJsonValue(vegetarian, json[QString("vegetarian")]);
    
    
    m_very_healthy_isValid = ::OpenAPI::fromJsonValue(very_healthy, json[QString("veryHealthy")]);
    
    
    m_very_popular_isValid = ::OpenAPI::fromJsonValue(very_popular, json[QString("veryPopular")]);
    
    
    m_whole30_isValid = ::OpenAPI::fromJsonValue(whole30, json[QString("whole30")]);
    
    
    m_weight_watcher_smart_points_isValid = ::OpenAPI::fromJsonValue(weight_watcher_smart_points, json[QString("weightWatcherSmartPoints")]);
    
    
    
    m_dish_types_isValid = ::OpenAPI::fromJsonValue(dish_types, json[QString("dishTypes")]);
    
    
    m_extended_ingredients_isValid = ::OpenAPI::fromJsonValue(extended_ingredients, json[QString("extendedIngredients")]);
    
    m_summary_isValid = ::OpenAPI::fromJsonValue(summary, json[QString("summary")]);
    
    
    m_wine_pairing_isValid = ::OpenAPI::fromJsonValue(wine_pairing, json[QString("winePairing")]);
    
    
}

QString
OAIInline_response_200_3::asJson () const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject
OAIInline_response_200_3::asJsonObject() const {
    QJsonObject obj;
	if(m_id_isSet){
        obj.insert(QString("id"), ::OpenAPI::toJsonValue(id));
    }
	if(m_title_isSet){
        obj.insert(QString("title"), ::OpenAPI::toJsonValue(title));
    }
	if(m_image_isSet){
        obj.insert(QString("image"), ::OpenAPI::toJsonValue(image));
    }
	if(m_image_type_isSet){
        obj.insert(QString("imageType"), ::OpenAPI::toJsonValue(image_type));
    }
	if(servings.isSet()){
        obj.insert(QString("servings"), ::OpenAPI::toJsonValue(servings));
    }
	if(m_ready_in_minutes_isSet){
        obj.insert(QString("readyInMinutes"), ::OpenAPI::toJsonValue(ready_in_minutes));
    }
	if(m_license_isSet){
        obj.insert(QString("license"), ::OpenAPI::toJsonValue(license));
    }
	if(m_source_name_isSet){
        obj.insert(QString("sourceName"), ::OpenAPI::toJsonValue(source_name));
    }
	if(m_source_url_isSet){
        obj.insert(QString("sourceUrl"), ::OpenAPI::toJsonValue(source_url));
    }
	if(m_spoonacular_source_url_isSet){
        obj.insert(QString("spoonacularSourceUrl"), ::OpenAPI::toJsonValue(spoonacular_source_url));
    }
	if(m_aggregate_likes_isSet){
        obj.insert(QString("aggregateLikes"), ::OpenAPI::toJsonValue(aggregate_likes));
    }
	if(health_score.isSet()){
        obj.insert(QString("healthScore"), ::OpenAPI::toJsonValue(health_score));
    }
	if(spoonacular_score.isSet()){
        obj.insert(QString("spoonacularScore"), ::OpenAPI::toJsonValue(spoonacular_score));
    }
	if(price_per_serving.isSet()){
        obj.insert(QString("pricePerServing"), ::OpenAPI::toJsonValue(price_per_serving));
    }
	
    if(analyzed_instructions.size() > 0){
        obj.insert(QString("analyzedInstructions"), ::OpenAPI::toJsonValue(analyzed_instructions));
    } 
	if(m_cheap_isSet){
        obj.insert(QString("cheap"), ::OpenAPI::toJsonValue(cheap));
    }
	if(m_credits_text_isSet){
        obj.insert(QString("creditsText"), ::OpenAPI::toJsonValue(credits_text));
    }
	
    if(cuisines.size() > 0){
        obj.insert(QString("cuisines"), ::OpenAPI::toJsonValue(cuisines));
    } 
	if(m_dairy_free_isSet){
        obj.insert(QString("dairyFree"), ::OpenAPI::toJsonValue(dairy_free));
    }
	
    if(diets.size() > 0){
        obj.insert(QString("diets"), ::OpenAPI::toJsonValue(diets));
    } 
	if(m_gaps_isSet){
        obj.insert(QString("gaps"), ::OpenAPI::toJsonValue(gaps));
    }
	if(m_gluten_free_isSet){
        obj.insert(QString("glutenFree"), ::OpenAPI::toJsonValue(gluten_free));
    }
	if(m_instructions_isSet){
        obj.insert(QString("instructions"), ::OpenAPI::toJsonValue(instructions));
    }
	if(m_ketogenic_isSet){
        obj.insert(QString("ketogenic"), ::OpenAPI::toJsonValue(ketogenic));
    }
	if(m_low_fodmap_isSet){
        obj.insert(QString("lowFodmap"), ::OpenAPI::toJsonValue(low_fodmap));
    }
	
    if(occasions.size() > 0){
        obj.insert(QString("occasions"), ::OpenAPI::toJsonValue(occasions));
    } 
	if(m_sustainable_isSet){
        obj.insert(QString("sustainable"), ::OpenAPI::toJsonValue(sustainable));
    }
	if(m_vegan_isSet){
        obj.insert(QString("vegan"), ::OpenAPI::toJsonValue(vegan));
    }
	if(m_vegetarian_isSet){
        obj.insert(QString("vegetarian"), ::OpenAPI::toJsonValue(vegetarian));
    }
	if(m_very_healthy_isSet){
        obj.insert(QString("veryHealthy"), ::OpenAPI::toJsonValue(very_healthy));
    }
	if(m_very_popular_isSet){
        obj.insert(QString("veryPopular"), ::OpenAPI::toJsonValue(very_popular));
    }
	if(m_whole30_isSet){
        obj.insert(QString("whole30"), ::OpenAPI::toJsonValue(whole30));
    }
	if(weight_watcher_smart_points.isSet()){
        obj.insert(QString("weightWatcherSmartPoints"), ::OpenAPI::toJsonValue(weight_watcher_smart_points));
    }
	
    if(dish_types.size() > 0){
        obj.insert(QString("dishTypes"), ::OpenAPI::toJsonValue(dish_types));
    } 
	
    if(extended_ingredients.size() > 0){
        obj.insert(QString("extendedIngredients"), ::OpenAPI::toJsonValue(extended_ingredients));
    } 
	if(m_summary_isSet){
        obj.insert(QString("summary"), ::OpenAPI::toJsonValue(summary));
    }
	if(wine_pairing.isSet()){
        obj.insert(QString("winePairing"), ::OpenAPI::toJsonValue(wine_pairing));
    }
    return obj;
}


qint32
OAIInline_response_200_3::getId() const {
    return id;
}
void
OAIInline_response_200_3::setId(const qint32 &id) {
    this->id = id;
    this->m_id_isSet = true;
}


QString
OAIInline_response_200_3::getTitle() const {
    return title;
}
void
OAIInline_response_200_3::setTitle(const QString &title) {
    this->title = title;
    this->m_title_isSet = true;
}


QString
OAIInline_response_200_3::getImage() const {
    return image;
}
void
OAIInline_response_200_3::setImage(const QString &image) {
    this->image = image;
    this->m_image_isSet = true;
}


QString
OAIInline_response_200_3::getImageType() const {
    return image_type;
}
void
OAIInline_response_200_3::setImageType(const QString &image_type) {
    this->image_type = image_type;
    this->m_image_type_isSet = true;
}


OAINumber
OAIInline_response_200_3::getServings() const {
    return servings;
}
void
OAIInline_response_200_3::setServings(const OAINumber &servings) {
    this->servings = servings;
    this->m_servings_isSet = true;
}


qint32
OAIInline_response_200_3::getReadyInMinutes() const {
    return ready_in_minutes;
}
void
OAIInline_response_200_3::setReadyInMinutes(const qint32 &ready_in_minutes) {
    this->ready_in_minutes = ready_in_minutes;
    this->m_ready_in_minutes_isSet = true;
}


QString
OAIInline_response_200_3::getLicense() const {
    return license;
}
void
OAIInline_response_200_3::setLicense(const QString &license) {
    this->license = license;
    this->m_license_isSet = true;
}


QString
OAIInline_response_200_3::getSourceName() const {
    return source_name;
}
void
OAIInline_response_200_3::setSourceName(const QString &source_name) {
    this->source_name = source_name;
    this->m_source_name_isSet = true;
}


QString
OAIInline_response_200_3::getSourceUrl() const {
    return source_url;
}
void
OAIInline_response_200_3::setSourceUrl(const QString &source_url) {
    this->source_url = source_url;
    this->m_source_url_isSet = true;
}


QString
OAIInline_response_200_3::getSpoonacularSourceUrl() const {
    return spoonacular_source_url;
}
void
OAIInline_response_200_3::setSpoonacularSourceUrl(const QString &spoonacular_source_url) {
    this->spoonacular_source_url = spoonacular_source_url;
    this->m_spoonacular_source_url_isSet = true;
}


qint32
OAIInline_response_200_3::getAggregateLikes() const {
    return aggregate_likes;
}
void
OAIInline_response_200_3::setAggregateLikes(const qint32 &aggregate_likes) {
    this->aggregate_likes = aggregate_likes;
    this->m_aggregate_likes_isSet = true;
}


OAINumber
OAIInline_response_200_3::getHealthScore() const {
    return health_score;
}
void
OAIInline_response_200_3::setHealthScore(const OAINumber &health_score) {
    this->health_score = health_score;
    this->m_health_score_isSet = true;
}


OAINumber
OAIInline_response_200_3::getSpoonacularScore() const {
    return spoonacular_score;
}
void
OAIInline_response_200_3::setSpoonacularScore(const OAINumber &spoonacular_score) {
    this->spoonacular_score = spoonacular_score;
    this->m_spoonacular_score_isSet = true;
}


OAINumber
OAIInline_response_200_3::getPricePerServing() const {
    return price_per_serving;
}
void
OAIInline_response_200_3::setPricePerServing(const OAINumber &price_per_serving) {
    this->price_per_serving = price_per_serving;
    this->m_price_per_serving_isSet = true;
}


QList<OAIObject>
OAIInline_response_200_3::getAnalyzedInstructions() const {
    return analyzed_instructions;
}
void
OAIInline_response_200_3::setAnalyzedInstructions(const QList<OAIObject> &analyzed_instructions) {
    this->analyzed_instructions = analyzed_instructions;
    this->m_analyzed_instructions_isSet = true;
}


bool
OAIInline_response_200_3::isCheap() const {
    return cheap;
}
void
OAIInline_response_200_3::setCheap(const bool &cheap) {
    this->cheap = cheap;
    this->m_cheap_isSet = true;
}


QString
OAIInline_response_200_3::getCreditsText() const {
    return credits_text;
}
void
OAIInline_response_200_3::setCreditsText(const QString &credits_text) {
    this->credits_text = credits_text;
    this->m_credits_text_isSet = true;
}


QList<QString>
OAIInline_response_200_3::getCuisines() const {
    return cuisines;
}
void
OAIInline_response_200_3::setCuisines(const QList<QString> &cuisines) {
    this->cuisines = cuisines;
    this->m_cuisines_isSet = true;
}


bool
OAIInline_response_200_3::isDairyFree() const {
    return dairy_free;
}
void
OAIInline_response_200_3::setDairyFree(const bool &dairy_free) {
    this->dairy_free = dairy_free;
    this->m_dairy_free_isSet = true;
}


QList<QString>
OAIInline_response_200_3::getDiets() const {
    return diets;
}
void
OAIInline_response_200_3::setDiets(const QList<QString> &diets) {
    this->diets = diets;
    this->m_diets_isSet = true;
}


QString
OAIInline_response_200_3::getGaps() const {
    return gaps;
}
void
OAIInline_response_200_3::setGaps(const QString &gaps) {
    this->gaps = gaps;
    this->m_gaps_isSet = true;
}


bool
OAIInline_response_200_3::isGlutenFree() const {
    return gluten_free;
}
void
OAIInline_response_200_3::setGlutenFree(const bool &gluten_free) {
    this->gluten_free = gluten_free;
    this->m_gluten_free_isSet = true;
}


QString
OAIInline_response_200_3::getInstructions() const {
    return instructions;
}
void
OAIInline_response_200_3::setInstructions(const QString &instructions) {
    this->instructions = instructions;
    this->m_instructions_isSet = true;
}


bool
OAIInline_response_200_3::isKetogenic() const {
    return ketogenic;
}
void
OAIInline_response_200_3::setKetogenic(const bool &ketogenic) {
    this->ketogenic = ketogenic;
    this->m_ketogenic_isSet = true;
}


bool
OAIInline_response_200_3::isLowFodmap() const {
    return low_fodmap;
}
void
OAIInline_response_200_3::setLowFodmap(const bool &low_fodmap) {
    this->low_fodmap = low_fodmap;
    this->m_low_fodmap_isSet = true;
}


QList<QString>
OAIInline_response_200_3::getOccasions() const {
    return occasions;
}
void
OAIInline_response_200_3::setOccasions(const QList<QString> &occasions) {
    this->occasions = occasions;
    this->m_occasions_isSet = true;
}


bool
OAIInline_response_200_3::isSustainable() const {
    return sustainable;
}
void
OAIInline_response_200_3::setSustainable(const bool &sustainable) {
    this->sustainable = sustainable;
    this->m_sustainable_isSet = true;
}


bool
OAIInline_response_200_3::isVegan() const {
    return vegan;
}
void
OAIInline_response_200_3::setVegan(const bool &vegan) {
    this->vegan = vegan;
    this->m_vegan_isSet = true;
}


bool
OAIInline_response_200_3::isVegetarian() const {
    return vegetarian;
}
void
OAIInline_response_200_3::setVegetarian(const bool &vegetarian) {
    this->vegetarian = vegetarian;
    this->m_vegetarian_isSet = true;
}


bool
OAIInline_response_200_3::isVeryHealthy() const {
    return very_healthy;
}
void
OAIInline_response_200_3::setVeryHealthy(const bool &very_healthy) {
    this->very_healthy = very_healthy;
    this->m_very_healthy_isSet = true;
}


bool
OAIInline_response_200_3::isVeryPopular() const {
    return very_popular;
}
void
OAIInline_response_200_3::setVeryPopular(const bool &very_popular) {
    this->very_popular = very_popular;
    this->m_very_popular_isSet = true;
}


bool
OAIInline_response_200_3::isWhole30() const {
    return whole30;
}
void
OAIInline_response_200_3::setWhole30(const bool &whole30) {
    this->whole30 = whole30;
    this->m_whole30_isSet = true;
}


OAINumber
OAIInline_response_200_3::getWeightWatcherSmartPoints() const {
    return weight_watcher_smart_points;
}
void
OAIInline_response_200_3::setWeightWatcherSmartPoints(const OAINumber &weight_watcher_smart_points) {
    this->weight_watcher_smart_points = weight_watcher_smart_points;
    this->m_weight_watcher_smart_points_isSet = true;
}


QList<QString>
OAIInline_response_200_3::getDishTypes() const {
    return dish_types;
}
void
OAIInline_response_200_3::setDishTypes(const QList<QString> &dish_types) {
    this->dish_types = dish_types;
    this->m_dish_types_isSet = true;
}


QList<OAIInline_response_200_3_extendedIngredients>
OAIInline_response_200_3::getExtendedIngredients() const {
    return extended_ingredients;
}
void
OAIInline_response_200_3::setExtendedIngredients(const QList<OAIInline_response_200_3_extendedIngredients> &extended_ingredients) {
    this->extended_ingredients = extended_ingredients;
    this->m_extended_ingredients_isSet = true;
}


QString
OAIInline_response_200_3::getSummary() const {
    return summary;
}
void
OAIInline_response_200_3::setSummary(const QString &summary) {
    this->summary = summary;
    this->m_summary_isSet = true;
}


OAIInline_response_200_3_winePairing
OAIInline_response_200_3::getWinePairing() const {
    return wine_pairing;
}
void
OAIInline_response_200_3::setWinePairing(const OAIInline_response_200_3_winePairing &wine_pairing) {
    this->wine_pairing = wine_pairing;
    this->m_wine_pairing_isSet = true;
}

bool
OAIInline_response_200_3::isSet() const {
    bool isObjectUpdated = false;
    do{ 
        if(m_id_isSet){ isObjectUpdated = true; break;}
    
        if(m_title_isSet){ isObjectUpdated = true; break;}
    
        if(m_image_isSet){ isObjectUpdated = true; break;}
    
        if(m_image_type_isSet){ isObjectUpdated = true; break;}
    
        if(servings.isSet()){ isObjectUpdated = true; break;}
    
        if(m_ready_in_minutes_isSet){ isObjectUpdated = true; break;}
    
        if(m_license_isSet){ isObjectUpdated = true; break;}
    
        if(m_source_name_isSet){ isObjectUpdated = true; break;}
    
        if(m_source_url_isSet){ isObjectUpdated = true; break;}
    
        if(m_spoonacular_source_url_isSet){ isObjectUpdated = true; break;}
    
        if(m_aggregate_likes_isSet){ isObjectUpdated = true; break;}
    
        if(health_score.isSet()){ isObjectUpdated = true; break;}
    
        if(spoonacular_score.isSet()){ isObjectUpdated = true; break;}
    
        if(price_per_serving.isSet()){ isObjectUpdated = true; break;}
    
        if(analyzed_instructions.size() > 0){ isObjectUpdated = true; break;}
    
        if(m_cheap_isSet){ isObjectUpdated = true; break;}
    
        if(m_credits_text_isSet){ isObjectUpdated = true; break;}
    
        if(cuisines.size() > 0){ isObjectUpdated = true; break;}
    
        if(m_dairy_free_isSet){ isObjectUpdated = true; break;}
    
        if(diets.size() > 0){ isObjectUpdated = true; break;}
    
        if(m_gaps_isSet){ isObjectUpdated = true; break;}
    
        if(m_gluten_free_isSet){ isObjectUpdated = true; break;}
    
        if(m_instructions_isSet){ isObjectUpdated = true; break;}
    
        if(m_ketogenic_isSet){ isObjectUpdated = true; break;}
    
        if(m_low_fodmap_isSet){ isObjectUpdated = true; break;}
    
        if(occasions.size() > 0){ isObjectUpdated = true; break;}
    
        if(m_sustainable_isSet){ isObjectUpdated = true; break;}
    
        if(m_vegan_isSet){ isObjectUpdated = true; break;}
    
        if(m_vegetarian_isSet){ isObjectUpdated = true; break;}
    
        if(m_very_healthy_isSet){ isObjectUpdated = true; break;}
    
        if(m_very_popular_isSet){ isObjectUpdated = true; break;}
    
        if(m_whole30_isSet){ isObjectUpdated = true; break;}
    
        if(weight_watcher_smart_points.isSet()){ isObjectUpdated = true; break;}
    
        if(dish_types.size() > 0){ isObjectUpdated = true; break;}
    
        if(extended_ingredients.size() > 0){ isObjectUpdated = true; break;}
    
        if(m_summary_isSet){ isObjectUpdated = true; break;}
    
        if(wine_pairing.isSet()){ isObjectUpdated = true; break;}
    }while(false);
    return isObjectUpdated;
}

bool
OAIInline_response_200_3::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_id_isValid && m_title_isValid && m_image_isValid && m_image_type_isValid && m_servings_isValid && m_ready_in_minutes_isValid && m_license_isValid && m_source_name_isValid && m_source_url_isValid && m_spoonacular_source_url_isValid && m_aggregate_likes_isValid && m_health_score_isValid && m_spoonacular_score_isValid && m_price_per_serving_isValid && m_analyzed_instructions_isValid && m_cheap_isValid && m_credits_text_isValid && m_cuisines_isValid && m_dairy_free_isValid && m_diets_isValid && m_gaps_isValid && m_gluten_free_isValid && m_instructions_isValid && m_ketogenic_isValid && m_low_fodmap_isValid && m_occasions_isValid && m_sustainable_isValid && m_vegan_isValid && m_vegetarian_isValid && m_very_healthy_isValid && m_very_popular_isValid && m_whole30_isValid && m_weight_watcher_smart_points_isValid && m_dish_types_isValid && m_extended_ingredients_isValid && m_summary_isValid && m_wine_pairing_isValid && true;
}

}
