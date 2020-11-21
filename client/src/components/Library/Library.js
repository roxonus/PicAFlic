import React from 'react'


function Library({ result, openPopup }) {
    // This is where we pull up all the data from the movie schema
    console.log(result.imdbID);
    return (
        <div className='result' onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
            
        </div>
    )
}

export default Library