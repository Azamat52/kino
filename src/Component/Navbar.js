import React from 'react'

function Navbar({ length , LenghtLike}) {
  return (
	<div className='Navbar'>
		<nav>
			<h2>{length > 0 ? `Barcha kinolar soni: ${length} ta` : "Kino yo'q"}</h2>
			<h3>{LenghtLike.length > 0 ? `Ko'rilganlar soni: ${LenghtLike.length} ta` : "Ko'rilganlar yo'q"}</h3>
		</nav>
	</div>
  )
}

export default Navbar