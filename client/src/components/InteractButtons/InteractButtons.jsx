import InteractModal from "../InteractModal/InteractModal"
import "./InteractButtons.css"

import { useState } from "react"

const InteractButtons = ({ handleClose, handleOpen }) => {
	return (
		<>
			<div className='interact_buttons'>
				<button className='cancel-button' onClick={handleClose}>
					Список добавленных
				</button>
				<button className='add-button' onClick={handleOpen}>
					Добавить
				</button>
			</div>
		</>
	)
}

export default InteractButtons
