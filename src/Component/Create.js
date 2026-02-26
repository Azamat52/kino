import React, { useRef, useState } from 'react'
import { v4 as id } from 'uuid'
import { motion } from 'framer-motion'

function Create({ addMovie }) {
	const [ name , setName ] = useState()
	const [ rating, setRating ] = useState()
	function handleSubmit(e){
		e.preventDefault()
		const newMovie = {
			name: name,
			rating: rating,
			id: id(),
			like: false
		}
		setName('')
		setRating('')
		addMovie(newMovie)
	}
  return (
	<motion.div
		initial={{ opacity: 0, y: 50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<div className='Create'>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="">Yangi kino qo'shish</label>
				<input type="text" value={name} required placeholder='Movie name' onChange={(e) => setName(e.target.value)}/>
				<input type="number" value={rating} required placeholder='Rating' onChange={(e) => setRating(e.target.value)}/>
				<button>Add</button>
			</form>
		</div>
	</motion.div>
  )
}

export default Create