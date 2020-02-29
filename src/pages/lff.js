import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../static/LFW_logo.png"

const Backdrop = styled.div`
  transition: background-image 0.1s ease;
  background-color: black;
  background-image: url(${({ cityImage }) => cityImage});
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);

  background-size: cover;
  /* background-blend-mode: saturation; */
  /* filter: grayscale(100%); */
  width: 100vw;
  height: 100vh;
  display: grid;
  /* align-items: start; */
  margin: 0;
  justify-content: center;
  align-content: center;
`

const CityTitles = styled.li`
  transition: all 0.1s ease;
  text-align: center;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 10rem;
  font-family: "Inconsolata";
  font-weight: bold;

  cursor: pointer;
  :hover {
    color: red;
    font-size: 12rem;
  }
`

const TitlesWrapper = styled.ul`
  list-style: none;

  /* display: flex;
  align-self: center; */
`

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin: 2em;
  width: 160px;
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
      "https://i1.wp.com/www.middleeastmonitor.com/wp-content/uploads/images/article_images/middle-east/a-destroyed-street-in-aleppo-syria.jpg?fit=933%2C622&quality=85&strip=all&ssl=1",
  },
]

const LondonFilmFest = () => {
  const [cityPicture, setcityPicture] = useState(null)
  // const [hoverRef, isHovered] = useHover()
  return (
    <Backdrop cityImage={cityPicture}>
      <Logo src={logo}></Logo>
      <TitlesWrapper>
        {lff.map(fest => {
          return (
            <CityTitles
              key={fest.url}
              onMouseOver={() => setcityPicture(fest.url)}
              onMouseOut={() => setcityPicture(null)}
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
