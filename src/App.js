import { useState } from "react";

import AppSection from "./components/AppSection";
import Greeting from "./components/Greeting";
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
      <AppSection name="greeting">
        <Greeting mode={mode} changeMode={() => changeMode(mode)} />
      </AppSection>
      <AppSection name="about" />
      <AppSection name="portfolio" />
      <AppSection name="contacts" />
    </div>
  );
}

export default App;
