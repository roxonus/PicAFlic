import React, { useState }from 'react'
import axios from 'axios';
import Results from '../Results';
import config from '../../firebase';
import Popup from '../Popup';
import firebase from 'firebase';

const Library = () => {
    // const [state, setState] = useState({
    //     s: "",
    //     results: [],
    //     selected: {}
    // });
    
    const handleLogout = () => {
        firebase.auth().signOut();
    };

    

    const openPopup = id => {
        // // axios(apiurl + '&i=' + id).then(({ data }) => {
        // //     let results = data;
        // //     console.log(results);
        // //     setState(prevState => {
        // //         return { ...prevState, selected: results }
        //     });
        // });
    }

    const closePopup = () => {
        // setState(prevState => {
        //     return { ...prevState, selected: {} }
        // });
    }


    return (

        <div className="mt-2">

            <section className='hero'>
                <nav>
                    <h2>
                        PicAFlic Library
                </h2>
                    <button onClick={'./Home/Home'}>
                        Home
                </button>
                    <button onClick={handleLogout}>
                        Logout
                </button>
                </nav>
                {/* <Results results={state.results} openPopup={openPopup} />
                {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} /> : false} */}
            </section>

        </div>
    )

}


export default Library;