import React from "react";
import Slider from "../Component/Slider.js";

export default function HomeScreen() {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="description">
        <div className="first-part">
          <div className="first-line-part">
            <h1>
              Concerts,
              <br /> Festivals,
              <br />
              Concerts privés,
              <br />
              Événementiel
            </h1>
            <h2>
              Une quinzaine de femmes
              <br />
              regroupées autour
              <br />
              <strong>
                de l'amour de la musique
                <br />
                et du chant polyphonique
              </strong>
            </h2>
          </div>
          <main>
            <p>
              Les Dames de Choeur vivent leur passion du chant avec enthousiasme
              et ferveur
            </p>
            <p>
              L'amour de la musique et du chant polyphonique est un lien fort
              qui les unit. Pacées sous la direction de{" "}
              <a href="/">Marie-Cécile Robin-Héraud</a>, artiste lyrique de
              talent, reconnue pour son exigence vocale, les Dames de Choeur
              n'ont pour seul objectif que de
              <strong> charmer et seduire un vaste public.</strong>
              <br />
              Le répertoire couvre une large période de la{" "}
              <strong>Musique classique</strong>: Rossini, Verdi, Faure,
              Saint-Saëns, Berlioz, Delibes, Brahls... Ces Dames ont aussi à
              coeurde vous faire découvrir les{" "}
              <strong>
                Chants traditionnels d'Europe, les chants hébraïques
              </strong>{" "}
              ainsi que des formes de{" "}
              <strong>polygonies vocales les plus inattendues...</strong>
              <br />
              Les concerts sont accompagnés par <strong>Rose Réglat,</strong>
              pianiste virtuose et professeur au Conservatoire de Bordeaux.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
