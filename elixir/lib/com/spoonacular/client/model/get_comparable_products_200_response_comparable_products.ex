# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.GetComparableProducts200ResponseComparableProducts do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :calories,
    :likes,
    :price,
    :protein,
    :spoonacularScore,
    :sugar
  ]

  @type t :: %__MODULE__{
    :calories => [map()],
    :likes => [map()],
    :price => [map()],
    :protein => [com.spoonacular.client.Model.GetComparableProducts200ResponseComparableProductsProteinInner.t],
    :spoonacularScore => [com.spoonacular.client.Model.GetComparableProducts200ResponseComparableProductsProteinInner.t],
    :sugar => [map()]
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.GetComparableProducts200ResponseComparableProducts do
  import com.spoonacular.client.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:protein, :list, com.spoonacular.client.Model.GetComparableProducts200ResponseComparableProductsProteinInner, options)
    |> deserialize(:spoonacularScore, :list, com.spoonacular.client.Model.GetComparableProducts200ResponseComparableProductsProteinInner, options)
  end
end

