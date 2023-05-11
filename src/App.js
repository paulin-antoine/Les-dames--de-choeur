import "./App.css";
import Header from "./Component/Header.js";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthScreen from "./Screens/AuthScreen";
import HomeScreen from "./Screens/HomeScreen";
import DateScreen from "./Screens/DateScreen";
import EntryPoint from "./Screens/EntryPoint";
import NotreCheffe from "./Screens/NotreCheffeScreen";
import NosMusiciens from "./Screens/NosMusiciensScreen";
import NosPartenaires from "./Screens/NosPartenairesScreen";
import DamesDeChoeur from "./Screens/DamesDeChoeurScreen";
import Contact from "./Screens/ContactScreen";

function App() {
  const location = useLocation();

  return (
    <div className="home">
      {location.pathname !== "/" && <Header />}

      <div
        className={
          location.pathname === "/"
            ? "entry-point"
            : location.pathname === "/Contact"
            ? "contact-page"
            : "reading-part"
        }
      >
        <Routes>
          <Route path="/" element={<EntryPoint />} exact></Route>
          <Route path="/agenda" element={<DateScreen />}></Route>
          <Route path="/auth" element={<AuthScreen />}></Route>
          <Route path="/accueil" element={<HomeScreen />}></Route>
          <Route path="/notre_cheffe" element={<NotreCheffe />}></Route>
          <Route path="/nos_musiciens" element={<NosMusiciens />}></Route>
          <Route path="/dames_de_choeur" element={<DamesDeChoeur />}></Route>
          <Route path="/nos_partenaires" element={<NosPartenaires />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
