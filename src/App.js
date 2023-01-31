import "./App.css";
import Header from "./Component/Header.js";
import { Routes, Route } from "react-router-dom";
import AuthScreen from "./Screens/AuthScreen";
import HomeScreen from "./Screens/HomeScreen";
import DateScreen from "./Screens/DateScreen";
import EntryPoint from "./Screens/EntryPoint";

function App() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<EntryPoint />} exact></Route>
      </Routes>
      <Header />
      <div className="reading-part">
        <Routes>
          <Route path="/agenda" element={<DateScreen />}></Route>
          <Route path="/auth" element={<AuthScreen />}></Route>
          <Route path="/accueil" element={<HomeScreen />} exact></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
