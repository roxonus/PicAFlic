import React from 'react'
import FaStar from '../components/Star/Stars'

function Popup({ selected, closePopup }) {
	return (
		<section className='popup'>
			<div className='content'>
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className='rating'>Rating: {selected.Rated}</p>
				<div className='plot'>
					<img src={selected.Poster} />
					<p>Plot:{selected.Plot}</p>
					<p>Director:{selected.Director}</p>
					<p>Actors: {selected.Actors}</p>
					<p>Runtime:{selected.Runtime}</p>
					<p>Rate This Movie:<FaStar /></p>
				</div>
				{/* Add the route to DB to save button below in onClick  */}
				<button className='save'>Save to Your Library</button>
				<button className='close' onClick={closePopup}>Close</button>
			</div>
		</section>
		
	)
	
}
	export default Popup