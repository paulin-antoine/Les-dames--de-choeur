import React from "react";
import { useState } from "react";
import "./AuthScreen.css";

export default function AdminScreen() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="admin-form">
      <form action="" method="POST" target="_blank">
        <h2>Connexion</h2>
        <div className="form-row">
          <div className="input">
            <input
              type="text"
              name="user"
              placeholder="Nom d'utilisateur"
            ></input>
          </div>
          <div className="input">
            <input
              type={isActive ? "password" : "text"}
              name="password"
              placeholder="Mot de passe"
            ></input>
            <i
              onClick={handleToggle}
              className={`fa-solid ${isActive ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
        </div>
        <button>Entrer</button>
      </form>
    </div>
  );
}
