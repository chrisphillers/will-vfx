import React, { useState, useEffect } from "react"
import styled from "styled-components"
import logo from "../../static/LFW_logo.png"
import * as S from "../styles/lff.styles.js"

const lff = [
  {
    name: "London",
    url:
      "https://london.ac.uk/sites/default/files/styles/promo_large/public/2018-10/london-aerial-cityscape-river-thames_1.jpg",
  },
  {
    name: "New York",
    url:
      "https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg",
  },
  {
    name: "Paris",
    url:
      "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg",
  },
  {
    name: "Aleppo",
    url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/10/06/15/aleppo-1-5-10-2016.jpg?w968h681",
  },
]

const LondonFilmFest = () => {
  const [city, setCity] = useState(null)

  const delayLoop = delay => {
    return (name, i) => {
      setTimeout(() => {
        setCity(name)
        // window.innerWidth < 1024 ? setCity(name) : null
      }, i * delay)
    }
  }
  // lff.map(delayLoop(1000))
  useEffect(() => {})
  // console.log(cityRotator)
  return (
    <S.Backdrop cityImage={city?.url}>
      <S.Logo src={logo}></S.Logo>
      <S.TitlesWrapper>
        {lff.map(fest => {
          const isSelected = city?.name === fest.name
          return (
            <S.CityTitles
              isSelected={isSelected}
              key={fest.url}
              onMouseOver={() => setCity(fest)}
              onMouseOut={() => setCity(null)}
            >
              {fest.name}
            </S.CityTitles>
          )
        })}
      </S.TitlesWrapper>
    </S.Backdrop>
  )
}

export default LondonFilmFest
