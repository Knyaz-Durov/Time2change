import { useState } from "react"
import "./InteractModal.css"
import { addValue } from "../../app/features/main.slice"
import { useDispatch, useSelector } from "react-redux"

const InteractModal = ({ handleClose }) => {
	const store = useSelector(state => state.store)
	const dispatch = useDispatch()
	const [initialState, setInitialState] = useState({
		Калории: "",
		Белок: "",
		Жиры: "",
		Углеводы: "",
	})
	const handleAdd = () => {
		dispatch(addValue(initialState))
		handleClose()
	}
	const handleChange = e => {
		const { name, value } = e.target
		setInitialState(prev => ({ ...prev, [name]: value }))
	}
	// console.log(store)
	return (
		<div className='modal-overlay' onClick={handleClose}>
			<div className='modal-window' onClick={e => e.stopPropagation()}>
				<h2>Добавить значения</h2>

				<input
					name='Калории'
					type='number'
					placeholder='Калории'
					value={initialState.Калории}
					onChange={handleChange}
				/>
				<input
					name='Белок'
					type='number'
					placeholder='Белок'
					value={initialState.Белок}
					onChange={handleChange}
				/>
				<input
					name='Жиры'
					type='number'
					placeholder='Жиры'
					value={initialState.Жиры}
					onChange={handleChange}
				/>
				<input
					name='Углеводы'
					type='number'
					placeholder='Углеводы'
					value={initialState.Углеводы}
					onChange={handleChange}
				/>

				<div className='modal-actions'>
					<button className='cancel-button' onClick={handleClose}>
						Отмена
					</button>
					<button onClick={handleAdd} className='add-button'>
						Добавить
					</button>
				</div>
			</div>
		</div>
	)
}

export default InteractModal
