import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
    return (
        <section className="results">
            {results.map(results => (
                <Result key={results.imdbID} result={results} openPopup={openPopup} />
            ))}
            
        </section>
    )
}

export default Results 
