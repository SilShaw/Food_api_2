# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.DetectFoodInText200Response do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :annotations
  ]

  @type t :: %__MODULE__{
    :annotations => [com.spoonacular.client.Model.DetectFoodInText200ResponseAnnotationsInner.t]
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.DetectFoodInText200Response do
  import com.spoonacular.client.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:annotations, :list, com.spoonacular.client.Model.DetectFoodInText200ResponseAnnotationsInner, options)
  end
end
