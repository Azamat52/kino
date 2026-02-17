import React, { useRef, useState } from 'react'
import { v4 as id } from 'uuid'

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
	<div className='Create'>
		<form action="" onSubmit={handleSubmit}>
			<label htmlFor="">Yangi kino qo'shish</label>
			<input type="text" value={name} required placeholder='Movie name' onChange={(e) => setName(e.target.value)}/>
			<input type="number" value={rating} required placeholder='Rating' onChange={(e) => setRating(e.target.value)}/>
			<button>Add</button>
		</form>
	</div>
  )
}

export default Create