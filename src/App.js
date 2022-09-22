import { useState } from "react";

import NavigationButton from "./UI/NavigationButton";
import AppSection from "./components/AppSection";
import Greeting from "./components/Greeting";
import About from "./components/About";

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

  return (
    <div className="App">
      <NavigationButton to="up" position={{ top: "10rem" }} text="ВВЕРХ" />
      <NavigationButton to="down" position={{ bottom: "10rem" }} text="ВНИЗ" />

      <AppSection name="greeting">
        <Greeting mode={mode} changeMode={() => changeMode(mode)} />
      </AppSection>

      <AppSection name="about">
        <About />
      </AppSection>
      <AppSection name="portfolio" />
      <AppSection name="contacts" />
    </div>
  );
}

export default App;
