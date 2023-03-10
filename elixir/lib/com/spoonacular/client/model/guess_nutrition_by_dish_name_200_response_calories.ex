# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.GuessNutritionByDishName200ResponseCalories do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :confidenceRange95Percent,
    :standardDeviation,
    :unit,
    :value
  ]

  @type t :: %__MODULE__{
    :confidenceRange95Percent => com.spoonacular.client.Model.GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent.t,
    :standardDeviation => float(),
    :unit => String.t,
    :value => float()
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.GuessNutritionByDishName200ResponseCalories do
  import com.spoonacular.client.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:confidenceRange95Percent, :struct, com.spoonacular.client.Model.GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent, options)
  end
end

