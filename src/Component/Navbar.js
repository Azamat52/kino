import React from 'react'
import { motion } from 'framer-motion'

function Navbar({ length , LenghtLike}) {
  return (
	<motion.div
		initial={{ opacity: 0, y: 50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<div className='Navbar'>
			<nav>
				<h2>{length > 0 ? `Barcha kinolar soni: ${length} ta` : "Kino yo'q"}</h2>
				<h3>{LenghtLike.length > 0 ? `Ko'rilganlar soni: ${LenghtLike.length} ta` : "Ko'rilganlar yo'q"}</h3>
			</nav>
		</div>
	</motion.div>
  )
}

export default Navbar