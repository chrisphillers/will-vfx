import React, { useState, useEffect } from "react"
import styled from "styled-components"
import logo from "../../static/LFW_logo.png"

const Backdrop = styled.div`
  transition: background 0.1s ease;
  background-color: black;
  background-image: url(${({ cityImage }) => cityImage});
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  /* height: 100%; */
  overflow: hidden;
  /* background-size: cover; */
  margin: 0;
  /* background-blend-mode: saturation; */
  /* filter: grayscale(100%); */
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: center;
`
// const desktopFont = 8

const CityTitles = styled.li`
  transition: all 0.1s ease;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "red" : "white")};
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Inconsolata";
  font-weight: bold;
  font-size: 16vw;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 10vw;
  }

  @media screen and (min-width: 1025px) {
    font-size: 8vw;

    :hover {
      color: red;
      font-size: 9vw;
    }
  }
`

const TitlesWrapper = styled.ul`
  list-style: none;
  padding: 0;

  /* display: flex;
  align-self: center; */
`

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin: 2vw;
  width: 20vw;

  @media screen and (min-width: 768px) {
    font-size: 6vw;
  }

  @media screen and (min-width: 1024px) {
    width: 10vw;
  }

  /* color: white; */
  /* background: #84d0ff;

  background-blend-mode: screen; */
  filter: brightness(1) invert(0.7) sepia(0) hue-rotate(100deg) saturate(200%);
`

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

  // const cityRotator = () => {}
  // cityRotator()
  const delayLoop = delay => {
    return (name, i) => {
      setTimeout(() => {
        window.innerWidth < 1024 ? setCity(name) : null
      }, i * delay)
    }
  }
  lff.map(delayLoop(1000))
  useEffect(() => {})
  // console.log(cityRotator)
  return (
    <Backdrop cityImage={city?.url}>
      <Logo src={logo}></Logo>
      <TitlesWrapper>
        {lff.map(fest => {
          const isSelected = city?.name === fest.name
          return (
            <CityTitles
              isSelected={isSelected}
              key={fest.url}
              onMouseOver={() => setCity(fest)}
              onMouseOut={() => setCity(null)}
            >
              {fest.name}
            </CityTitles>
          )
        })}
      </TitlesWrapper>
    </Backdrop>
  )
}

export default LondonFilmFest
