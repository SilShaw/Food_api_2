package com.spoonacular.client.model

import io.circe._
import io.finch.circe._
import io.circe.generic.semiauto._
import io.circe.java8.time._
import org.openapitools._
import com.spoonacular.client.model.AnyType
import com.spoonacular.client.model.BigDecimal

/**
 * 
 * @param id 
 * @param title 
 * @param averageRating 
 * @param description 
 * @param imageUrl 
 * @param link 
 * @param price 
 * @param ratingCount 
 * @param score 
 */
case class GetWinePairing200ResponseProductMatchesInner(id: Int,
                title: String,
                averageRating: BigDecimal,
                description: Option[AnyType],
                imageUrl: String,
                link: String,
                price: String,
                ratingCount: Int,
                score: BigDecimal
                )

object GetWinePairing200ResponseProductMatchesInner {
    /**
     * Creates the codec for converting GetWinePairing200ResponseProductMatchesInner from and to JSON.
     */
    implicit val decoder: Decoder[GetWinePairing200ResponseProductMatchesInner] = deriveDecoder
    implicit val encoder: ObjectEncoder[GetWinePairing200ResponseProductMatchesInner] = deriveEncoder
}
