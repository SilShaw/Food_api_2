# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.InlineResponse20021Calories do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :"confidenceRange95Percent",
    :"standardDeviation",
    :"unit",
    :"value"
  ]

  @type t :: %__MODULE__{
    :"confidenceRange95Percent" => InlineResponse20021CaloriesConfidenceRange95Percent,
    :"standardDeviation" => float(),
    :"unit" => String.t,
    :"value" => float()
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.InlineResponse20021Calories do
  import com.spoonacular.client.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:"confidenceRange95Percent", :struct, com.spoonacular.client.Model.InlineResponse20021CaloriesConfidenceRange95Percent, options)
  end
end
