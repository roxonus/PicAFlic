import React from 'react'
import firebase from '../firebase'
import FaStar from '../components/Star/Stars'



function Popup({ selected, closePopup}) {
	const onSave = () => {
		console.log(selected)
		const db = firebase.firestore();
		console.log(db)
    db.collection('movies').add({...selected })
     
    }
    

	return (
		<section className="popup">
      <div className="content">
        <img src={selected.Poster} />
      </div>
      <div className="details">
        <p>
          {selected.Title} <span>({selected.Year})</span>
        </p>
        <p>Rated:{selected.Rated}</p>
		<p>Runtime:{selected.Runtime}</p>
        <p>Director:{selected.Director}</p>
		<p>Actors: {selected.Actors}</p>
        <p>Plot: {selected.Plot}</p>
        <p>
          Rate This Movie:
          <FaStar />
        </p>
        <div className="comments">
            <label type="text">Leave a comment:</label><br />
            <textarea type="text" className="leaveComment"></textarea>
        </div><br/>
		<div className="button">
        <button className="save"onClick={onSave}>Save to Your Library</button>
        <button className="close" onClick={closePopup}>
		{" "}
          Close
        </button>
		</div>
      </div>
    </section>
		
	)
	
}
	export default Popup