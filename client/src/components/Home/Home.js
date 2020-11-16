import React, { useState } from 'react';
import axios from 'axios'
import Search from '../Search/Search'
import Results from '../Results'


function Home(props) {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    });
    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=471abaae";
    //data.data.search

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let results = data.Search;

                setState(prevState => {
                    return { ...prevState, results: results }
                })
            });
        }
    }

    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return { ...prevState, s: s }
        });

        console.log(state.s);
    }
    return(
        <div className="mt-2">
           <header>
               <h1>PicAFlic</h1>
           </header>
           <main>
               <Search handleInput={handleInput} search={search} />
               <Results results={state.results} />
           </main>
        </div>
    )
}

export default Home;
