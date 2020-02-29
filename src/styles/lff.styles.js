// import React, { useState, useEffect } from "react"
import styled from "styled-components"

export const Backdrop = styled.div`
  transition: background 0.1s ease;
  background-color: black;
  background-image: url(${({ cityImage }) => cityImage});
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: hidden;
  margin: 0;
  /* background-blend-mode: saturation; */
  /* filter: grayscale(100%); */
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: center;
`
export const CityTitles = styled.li`
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

export const TitlesWrapper = styled.ul`
  list-style: none;
  padding: 0;
`

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin: 2vw;
  width: 20vw;
  filter: brightness(1) invert(0.7) sepia(0) hue-rotate(100deg) saturate(200%);

  @media screen and (min-width: 768px) {
    font-size: 6vw;
  }

  @media screen and (min-width: 1024px) {
    width: 10vw;
  }
`
