import React from 'react'
import { useState } from 'react'

function Search({ setSearch, setFilter, filter }) {
	return (
		<div className='Search'>
			<input type="text" placeholder='Kinolarni qidirish' onChange={(e) => { setSearch (e.target.value)}}/>
			<button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Barcha kinolar</button>
			<button onClick={() =>setFilter('famous')} className={filter === 'famous' ? 'active' : ''}>Mashhur kinolar</button>
			<button onClick={() =>setFilter('rating')} className={filter === 'rating' ? 'active' :''}>Eng ko'p ko'rilgan kinolar</button>
		</div>
	)
}

export default Search