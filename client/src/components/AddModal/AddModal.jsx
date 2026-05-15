import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addValue } from "../../app/features/main.slice"

const AddModal = ({ handleClose }) => {
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
	return (
		<>
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
		</>
	)
}

export default AddModal
