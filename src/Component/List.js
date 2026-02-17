import React from 'react'

function List({ setMovies, filterMovies, length, handleDelete, toggleLike }) {
  return (
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
  )
}

export default List