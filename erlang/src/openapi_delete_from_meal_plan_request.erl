-module(openapi_delete_from_meal_plan_request).

-export([encode/1]).

-export_type([openapi_delete_from_meal_plan_request/0]).

-type openapi_delete_from_meal_plan_request() ::
    #{ 'username' := binary(),
       'id' := integer(),
       'hash' := binary()
     }.

encode(#{ 'username' := Username,
          'id' := Id,
          'hash' := Hash
        }) ->
    #{ 'username' => Username,
       'id' => Id,
       'hash' => Hash
     }.
