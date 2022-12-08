import "./App.css";
import Header from "./Component/Header.js";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "./Screens/AdminScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="home">
      <Header />
      <div className="reading-part">
        <Routes>
          <Route path="/admin" element={<AdminScreen />}></Route>
          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
