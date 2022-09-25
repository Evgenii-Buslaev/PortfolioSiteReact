import { useState } from "react";

import NavigationButton from "./UI/NavigationButton";
import AppSection from "./components/AppSection";
import Greeting from "./components/Greeting";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

import "./App.css";
import "./css/reset.css";

function App() {
  const [mode, setMode] = useState("light");

  function changeMode() {
    if (mode === "dark") {
      setMode("light");
      return;
    }
    setMode("dark");
  }

  function scrollUp() {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  }

  function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <div className="App">
      <NavigationButton
        to="up"
        position={{ top: "10rem" }}
        text="ВВЕРХ"
        click={scrollUp}
      />
      <NavigationButton
        to="down"
        position={{ bottom: "10rem" }}
        text="ВНИЗ"
        click={scrollDown}
      />

      <AppSection name="greeting">
        <Greeting mode={mode} changeMode={() => changeMode(mode)} />
      </AppSection>

      <AppSection name="about">
        <About />
      </AppSection>

      <AppSection name="portfolio">
        <Portfolio />
      </AppSection>

      <AppSection name="contacts">
        <Contacts />
      </AppSection>
    </div>
  );
}

export default App;
