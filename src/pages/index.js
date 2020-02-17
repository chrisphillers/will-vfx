import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Header } from "../components/header"

export default () => (
  <div>
    <Header title="HEADER OF TEST PAGE"></Header>
    <div>Hello world!</div>
    <Link to="/test/">LINK</Link>

    <img src="https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcL3RodW1ibmFpbHNcXFwvX3RodW1ibmFpbExhcmdlXFxcL1N0cmVhbWVyLUhhQ2h1YmJ5LWhvcnJpZmllcy1Ud2l0Y2gtYnktc2hvd2luZy1oZXItZml2ZS1zdGFyLWhvdGVsLmpwZ1wiLFwid2lkdGhcIjo2MjAsXCJoZWlnaHRcIjozNDcsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tXFxcL3BwbHVzLmltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMTlcXFwvMTFcXFwvMTEyMTQ5NDNcXFwvcGxhY2Vob2xkZXIuanBnXCJ9IiwiaGFzaCI6ImEwNTk4YWQ1ZjIwOWMyNmIzMjI3YmYwMzVkNzFmODUwYTY3ZjgzM2UifQ==/streamer-hachubby-horrifies-twitch-by-showing-her-five-star-hotel.jpg"></img>
  </div>
)
