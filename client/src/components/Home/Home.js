import React, { useState } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Results from '../Results';
import fire from '../../firebase';
import Popup from '../Popup';

// import Hero from '../../Hero'


function Home() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    });
    const apiurl = "https://www.omdbapi.com/?&apikey=471abaae";
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
          let results = data;
          console.log(results);
          setState(prevState => {
            return { ...prevState, selected: results }
          });
        });
      }
      
    const closePopup = () => {
        setState(prevState => {
          return { ...prevState, selected: {} }
        });
      }

    
    //   For saving the users choice to library
    // const saveLibrary = () => {
    //     setState(prevState => {
    //       return { ...prevState, selected: {} }
    //     });
    //   }

    

    return(
        
        <div className="mt-2">
        
           <section className='hero'>
            <nav>
                <h2>
                    Welcome to PicAFlic
                </h2>
                <button onClick={'../Library/Library'}>
                    Library
                </button>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </nav>
               <Search handleInput={handleInput} search={search} />
               <Results results={state.results} openPopup={openPopup} />
                {/* add in here a savelibrary={saveLibrary} */}
               {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
               </section>
         
        </div>
    )
}




export default Home;

