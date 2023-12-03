import React from "react";
import './Modal.css';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";

export default function ModalCase({ setIsOpen, film }) {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="modal-show" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div
        id="modal1"
        className="modal"
        style={{
          width: "800px",
          height: "560px",
          display: "inline-block", top: "35%",
          backgroundColor: theme.backgroundColor
        }}
      >
        <div
          className="modal-content"
        >
          <h4 style={{ fontSize: "25px", color: "rgb(88 131 184)" }}>
            View Trailer: {film.title}
          </h4>
          <p>
            <iframe
              width="100%"
              height= "400px"
              src={film.clip}
              title={film.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </div>
        <div className="modal-footer" style={{ backgroundColor: "transparent" }}>
          <a
            className="modal-close" 
            onClick={() => setIsOpen(false)}
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
}