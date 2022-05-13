import React from "react";
import { Link, useParams } from "react-router-dom";
import { datAnimal } from "../datas/datAnimal";
import "../styles/Animals.css";

export default function Animals() {
  const { id } = useParams();

  return (
    <div className="animal">
      <div className="animal-header">
        <img
          className="animal-img"
          src="https://www.conservation-nature.fr/wp-content/themes/plantora/img/le-panda-roux.jpg"
          alt={datAnimal[id].code}
        />
      </div>
      <div className="animal-body">
        <h2 className="animal-title">{datAnimal[id].name}</h2>
        <h3>Description</h3>
        <p className="animal-description">{datAnimal[id].desc}</p>
        <h4>Où est-il ?</h4>
        <p className="animal-location">{datAnimal[id].distribution}</p>
        <h3>Statut de conservation de UICN</h3>
        <img
          className="UICNimg"
          src="https://www.conservation-nature.fr/wp-content/themes/plantora/img/statut-conservation-danger.png"
          alt="imageUICN"
        />
        <h3>De quoi est-il menacé ?</h3>
        <p className="animal-extinction">{datAnimal[id].ext}</p>
      </div>
      <div className="returnbutton">
        <Link to="/">
          <button type="button" className="animal-emoji">
            ⏪{datAnimal[id].emoji}
          </button>
        </Link>
      </div>
    </div>
  );
}
