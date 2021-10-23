import React from "react";
import Bg from "../images/quotebg.jpg";

export const Start = () => {
  return (
    <main>
      <div className="quote">
        <img
          src={Bg}
          alt="Obniż Rachunki Warren Buffet"
          className="quote__img"
        />
        <button className="quote__btn">
          Jak mogę obniżyć swoje rachunki za prąd i gaz?
        </button>
      </div>
    </main>
  );
};
