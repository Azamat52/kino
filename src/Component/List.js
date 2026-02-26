import React from 'react'
import { motion } from 'framer-motion'

function List({ setMovies, filterMovies, length, handleDelete, toggleLike }) {
  return (
	<motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className='List'>
        {filterMovies.map((movie) => {
          return(
            <div className="div" key={movie.id}>
              <div className="div_in">
                <div className="name">
                  <p>{movie.name}</p>
                </div>
                <div className="info">
                  <p>{movie.rating}</p>
                  <i className="fa-regular fa-eye" onClick={() => toggleLike(movie.id)}>
                  </i>
                  <i className="fa-solid fa-trash" onClick={() => handleDelete(movie.id)}></i>
                  <i className="fa-solid fa-star" style={{opacity: movie.like ? 1 : 0, color: 'gold'}}></i>
                </div>
              </div>
              <hr />
            </div>
          )
        })}
        <p className='p'>{length == 0 ? 'No result' : null}</p>
      </div>
  </motion.div>
  )
}

export default List