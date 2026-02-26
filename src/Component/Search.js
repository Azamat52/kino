import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Search({ setSearch, setFilter, filter }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}		
		>
			<div className='Search'>
				<input type="text" placeholder='Kinolarni qidirish' onChange={(e) => { setSearch (e.target.value)}}/>
				<button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Barcha kinolar</button>
				<button onClick={() =>setFilter('famous')} className={filter === 'famous' ? 'active' : ''}>Mashhur kinolar</button>
				<button onClick={() =>setFilter('rating')} className={filter === 'rating' ? 'active' :''}>Eng ko'p ko'rilgan kinolar</button>
			</div>
		</motion.div>
	)
}

export default Search