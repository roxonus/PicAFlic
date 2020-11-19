import React, { useState } from 'react';
import axios from 'axios'
import Search from '../Search/Search'
import Results from '../Results'
import fire from '../../fire';
import Popup from '../Popup'
// import Hero from '../../Hero'


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
    

    const handleLogout = () => {
        fire.auth().signOut();
      };

    const openPopup = id => {
        axios(apiurl + '&i=' + id).then(({ data }) => {
          let result = data;
          console.log(result);
          setState(prevState => {
            return { ...prevState, selected: result }
          });
        });
      }
      
    const closePopup = () => {
        setState(prevState => {
          return { ...prevState, selected: {} }
        });
      }

    

    return(
        
        <div className="mt-2">
        
           <section className='hero'>
            <nav>
                <h2>
                    Welcome to PicAFlic
                </h2>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </nav>
               <Search handleInput={handleInput} search={search} />
               <Results results={state.results} openPopup={openPopup} />

               {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
               </section>
         
        </div>
    )
}




export default Home;

