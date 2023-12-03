import React from "react";
import { useParams } from "react-router-dom";
import { Films } from "../../Share/ListOfFilms";
import { Icon } from "react-materialize";
import ModalCase from "../Modal/ModalCase";
import { useState } from "react";
import './Detail.css'
export default function Detail() {
  const filmName = useParams();

  const film = Films.find((obj) => {
    return obj.id == filmName.id;
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <img src={`../${film.img}`} alt="" />
      </div>
      <div>
        <div>
          <h2>
            <b>{film.title}</b>
          </h2>
        </div>
        <i>Years: {film.year}</i>
        <p>Country: {film.nation}</p>

        <div style={{
          fontSize: "20px",
          color: "white"
        }}>{film.info}</div>

        <a
          onClick={() => setIsOpen(true)}
          className="btn-floating halfway-fab waves-effect waves-light red"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Icon style={{
            width: '100%',
            fontSize: "30px",
            transition: 'transform 0.2s ease-in-out',  
            cursor: 'pointer'  
          }}>play_circle_outline</Icon>
        </a>
        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
      </div>
    </div>
  );
}
