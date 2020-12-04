import React from "react";
function Result({ result, openPopup }) {
  console.log(result.imdbID);
  return (
    <div className="row">
      <div className="card" onClick={() => openPopup(result.imdbID)}>
        <div className="card-image">
          <img src={result.Poster} />
        </div>
      </div>
    </div>
  );
}
export default Result;
