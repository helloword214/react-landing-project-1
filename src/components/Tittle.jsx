import React from "react";

function Tittle({ tittle, subtittle }) {
  return (
    <>
      <div className="section-title">
        <h2>
          {tittle} <span>{subtittle}</span>
        </h2>
      </div>
    </>
  );
}

export default Tittle;
