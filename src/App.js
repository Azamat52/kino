import { useEffect, useState } from 'react'
import './App.css';
import Create from './Component/Create'
import List from './Component/List'
import Navbar from './Component/Navbar'
import Search from './Component/Search'
import { v4 as id } from 'uuid'
function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem('movies')
    return saved
      ? JSON.parse(saved)
      : 
      [
        { name: "Avatar", rating: 980, id: id(), like: false },
        { name: "Titanik", rating: 890, id: id(), like: true },
        { name: "King Kong", rating: 985, id: id(), like: false },
        { name: "Harry Potter", rating: 901, id: id(), like: true },
        { name: "Stranger things", rating: 999, id: id(), like: false }
      ]
  })  
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])
  function LenghtLike( like ){
      return movies.filter((item) => item.like == like)
  }
  // Filters
  function handleFilter(arr, key){
    if (key === 'all') return arr
    else if(key === 'famous') return arr.filter((item) => item.like)
    else if (key === 'rating') return arr.filter((item) => item.rating > 900)
  }
  // ADD MOVIE
  function addMovie(newMovie){
    setMovies((prev) => {
      return [...prev, newMovie]
    })
    console.log(movies);
  }
  // Delete Movie
  function handleDelete(id){
    setMovies(movies.filter((m) => m.id !== id))
  }
  // toggleLike
  function toggleLike(id) {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, like: !m.like } : m
      )
    )
  }
  // Search
  function SearchHandler( arr , key){
    if ( key.length == 0){
      return arr
    }
    else{
      return arr.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()))
    }
  }
  const filterMovies = handleFilter(SearchHandler(movies, search),filter)
  
  return (
    <div className="App">
      <div className="all"> 
        <Navbar length={movies.length} LenghtLike={LenghtLike(true)}/>
        <Search setSearch={setSearch} setFilter={setFilter} filter={filter}/>
        <List filterMovies={filterMovies} setMovies={setMovies} length={movies.length} handleDelete={handleDelete} toggleLike={toggleLike}/>
        <Create addMovie={addMovie}/>
      </div>
    </div>
  );
}

export default App;
