/*
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.spoonacular.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.spoonacular.client.model.GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.spoonacular.client.JSON;

/**
 * GetRecipeInformation200ResponseExtendedIngredientsInner
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-09-09T18:25:28.115+02:00[Europe/Berlin]")
public class GetRecipeInformation200ResponseExtendedIngredientsInner {
  public static final String SERIALIZED_NAME_AISLE = "aisle";
  @SerializedName(SERIALIZED_NAME_AISLE)
  private String aisle;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private BigDecimal amount;

  public static final String SERIALIZED_NAME_CONSITENCY = "consitency";
  @SerializedName(SERIALIZED_NAME_CONSITENCY)
  private String consitency;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Integer id;

  public static final String SERIALIZED_NAME_IMAGE = "image";
  @SerializedName(SERIALIZED_NAME_IMAGE)
  private String image;

  public static final String SERIALIZED_NAME_MEASURES = "measures";
  @SerializedName(SERIALIZED_NAME_MEASURES)
  private GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures measures;

  public static final String SERIALIZED_NAME_META = "meta";
  @SerializedName(SERIALIZED_NAME_META)
  private List<String> meta = null;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_ORIGINAL = "original";
  @SerializedName(SERIALIZED_NAME_ORIGINAL)
  private String original;

  public static final String SERIALIZED_NAME_ORIGINAL_NAME = "originalName";
  @SerializedName(SERIALIZED_NAME_ORIGINAL_NAME)
  private String originalName;

  public static final String SERIALIZED_NAME_UNIT = "unit";
  @SerializedName(SERIALIZED_NAME_UNIT)
  private String unit;

  public GetRecipeInformation200ResponseExtendedIngredientsInner() { 
  }

  public GetRecipeInformation200ResponseExtendedIngredientsInner aisle(String aisle) {
    
    this.aisle = aisle;
    return this;
  }

   /**
   * Get aisle
   * @return aisle
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getAisle() {
    return aisle;
  }


  public void setAisle(String aisle) {
    this.aisle = aisle;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner amount(BigDecimal amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public BigDecimal getAmount() {
    return amount;
  }


  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner consitency(String consitency) {
    
    this.consitency = consitency;
    return this;
  }

   /**
   * Get consitency
   * @return consitency
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getConsitency() {
    return consitency;
  }


  public void setConsitency(String consitency) {
    this.consitency = consitency;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner id(Integer id) {
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getId() {
    return id;
  }


  public void setId(Integer id) {
    this.id = id;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner image(String image) {
    
    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getImage() {
    return image;
  }


  public void setImage(String image) {
    this.image = image;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner measures(GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures measures) {
    
    this.measures = measures;
    return this;
  }

   /**
   * Get measures
   * @return measures
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures getMeasures() {
    return measures;
  }


  public void setMeasures(GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures measures) {
    this.measures = measures;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner meta(List<String> meta) {
    
    this.meta = meta;
    return this;
  }

  public GetRecipeInformation200ResponseExtendedIngredientsInner addMetaItem(String metaItem) {
    if (this.meta == null) {
      this.meta = new ArrayList<>();
    }
    this.meta.add(metaItem);
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getMeta() {
    return meta;
  }


  public void setMeta(List<String> meta) {
    this.meta = meta;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner original(String original) {
    
    this.original = original;
    return this;
  }

   /**
   * Get original
   * @return original
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getOriginal() {
    return original;
  }


  public void setOriginal(String original) {
    this.original = original;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner originalName(String originalName) {
    
    this.originalName = originalName;
    return this;
  }

   /**
   * Get originalName
   * @return originalName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getOriginalName() {
    return originalName;
  }


  public void setOriginalName(String originalName) {
    this.originalName = originalName;
  }


  public GetRecipeInformation200ResponseExtendedIngredientsInner unit(String unit) {
    
    this.unit = unit;
    return this;
  }

   /**
   * Get unit
   * @return unit
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getUnit() {
    return unit;
  }


  public void setUnit(String unit) {
    this.unit = unit;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetRecipeInformation200ResponseExtendedIngredientsInner getRecipeInformation200ResponseExtendedIngredientsInner = (GetRecipeInformation200ResponseExtendedIngredientsInner) o;
    return Objects.equals(this.aisle, getRecipeInformation200ResponseExtendedIngredientsInner.aisle) &&
        Objects.equals(this.amount, getRecipeInformation200ResponseExtendedIngredientsInner.amount) &&
        Objects.equals(this.consitency, getRecipeInformation200ResponseExtendedIngredientsInner.consitency) &&
        Objects.equals(this.id, getRecipeInformation200ResponseExtendedIngredientsInner.id) &&
        Objects.equals(this.image, getRecipeInformation200ResponseExtendedIngredientsInner.image) &&
        Objects.equals(this.measures, getRecipeInformation200ResponseExtendedIngredientsInner.measures) &&
        Objects.equals(this.meta, getRecipeInformation200ResponseExtendedIngredientsInner.meta) &&
        Objects.equals(this.name, getRecipeInformation200ResponseExtendedIngredientsInner.name) &&
        Objects.equals(this.original, getRecipeInformation200ResponseExtendedIngredientsInner.original) &&
        Objects.equals(this.originalName, getRecipeInformation200ResponseExtendedIngredientsInner.originalName) &&
        Objects.equals(this.unit, getRecipeInformation200ResponseExtendedIngredientsInner.unit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(aisle, amount, consitency, id, image, measures, meta, name, original, originalName, unit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetRecipeInformation200ResponseExtendedIngredientsInner {\n");
    sb.append("    aisle: ").append(toIndentedString(aisle)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    consitency: ").append(toIndentedString(consitency)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    measures: ").append(toIndentedString(measures)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    original: ").append(toIndentedString(original)).append("\n");
    sb.append("    originalName: ").append(toIndentedString(originalName)).append("\n");
    sb.append("    unit: ").append(toIndentedString(unit)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("aisle");
    openapiFields.add("amount");
    openapiFields.add("consitency");
    openapiFields.add("id");
    openapiFields.add("image");
    openapiFields.add("measures");
    openapiFields.add("meta");
    openapiFields.add("name");
    openapiFields.add("original");
    openapiFields.add("originalName");
    openapiFields.add("unit");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("aisle");
    openapiRequiredFields.add("amount");
    openapiRequiredFields.add("consitency");
    openapiRequiredFields.add("id");
    openapiRequiredFields.add("image");
    openapiRequiredFields.add("name");
    openapiRequiredFields.add("original");
    openapiRequiredFields.add("originalName");
    openapiRequiredFields.add("unit");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to GetRecipeInformation200ResponseExtendedIngredientsInner
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (GetRecipeInformation200ResponseExtendedIngredientsInner.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in GetRecipeInformation200ResponseExtendedIngredientsInner is not found in the empty JSON string", GetRecipeInformation200ResponseExtendedIngredientsInner.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!GetRecipeInformation200ResponseExtendedIngredientsInner.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `GetRecipeInformation200ResponseExtendedIngredientsInner` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : GetRecipeInformation200ResponseExtendedIngredientsInner.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (jsonObj.get("aisle") != null && !jsonObj.get("aisle").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `aisle` to be a primitive type in the JSON string but got `%s`", jsonObj.get("aisle").toString()));
      }
      if (jsonObj.get("consitency") != null && !jsonObj.get("consitency").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `consitency` to be a primitive type in the JSON string but got `%s`", jsonObj.get("consitency").toString()));
      }
      if (jsonObj.get("image") != null && !jsonObj.get("image").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `image` to be a primitive type in the JSON string but got `%s`", jsonObj.get("image").toString()));
      }
      // validate the optional field `measures`
      if (jsonObj.getAsJsonObject("measures") != null) {
        GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures.validateJsonObject(jsonObj.getAsJsonObject("measures"));
      }
      // ensure the json data is an array
      if (jsonObj.get("meta") != null && !jsonObj.get("meta").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `meta` to be an array in the JSON string but got `%s`", jsonObj.get("meta").toString()));
      }
      if (jsonObj.get("name") != null && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if (jsonObj.get("original") != null && !jsonObj.get("original").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `original` to be a primitive type in the JSON string but got `%s`", jsonObj.get("original").toString()));
      }
      if (jsonObj.get("originalName") != null && !jsonObj.get("originalName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `originalName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("originalName").toString()));
      }
      if (jsonObj.get("unit") != null && !jsonObj.get("unit").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `unit` to be a primitive type in the JSON string but got `%s`", jsonObj.get("unit").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!GetRecipeInformation200ResponseExtendedIngredientsInner.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'GetRecipeInformation200ResponseExtendedIngredientsInner' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<GetRecipeInformation200ResponseExtendedIngredientsInner> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(GetRecipeInformation200ResponseExtendedIngredientsInner.class));

       return (TypeAdapter<T>) new TypeAdapter<GetRecipeInformation200ResponseExtendedIngredientsInner>() {
           @Override
           public void write(JsonWriter out, GetRecipeInformation200ResponseExtendedIngredientsInner value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public GetRecipeInformation200ResponseExtendedIngredientsInner read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of GetRecipeInformation200ResponseExtendedIngredientsInner given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of GetRecipeInformation200ResponseExtendedIngredientsInner
  * @throws IOException if the JSON string is invalid with respect to GetRecipeInformation200ResponseExtendedIngredientsInner
  */
  public static GetRecipeInformation200ResponseExtendedIngredientsInner fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, GetRecipeInformation200ResponseExtendedIngredientsInner.class);
  }

 /**
  * Convert an instance of GetRecipeInformation200ResponseExtendedIngredientsInner to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
