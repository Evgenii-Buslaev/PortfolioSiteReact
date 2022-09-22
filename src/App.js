import AppSection from "./components/AppSection";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppSection name="greeting">
        <Greeting />
      </AppSection>
      <AppSection name="about" />
      <AppSection name="portfolio" />
      <AppSection name="contacts" />
    </div>
  );
}

export default App;
