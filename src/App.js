import logo from "./logo.svg"
import "./App.css"
import { FaBuffer } from "react-icons/fa"

function App() {
  const handleClick = () => {
    let element = document.getElementById("navlinks")
    const computedStyle = window.getComputedStyle(element, null)
    console.log(computedStyle.display)

    if (computedStyle.display === "none") {
      element.style = "display:flex"
    } else {
      element.style = "display:none"
    }
  }
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="navlinks">
        <ul id="navlinks">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="burger" onClick={handleClick}>
        <FaBuffer />
      </div>
    </div>
  )
}

export default App
