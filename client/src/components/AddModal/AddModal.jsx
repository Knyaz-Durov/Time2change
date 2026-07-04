import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addValue } from "../../app/features/macros.slice"
import { addDish } from "../../app/features/listOfDishes.slice"

const AddModal = ({ handleClose }) => {
	const dispatch = useDispatch()
	const [nameOfDish, setNameOfDish] = useState("")
	const [macrosOfDish, setMacrosOfDish] = useState({
		Калории: "",
		Белок: "",
		Жиры: "",
		Углеводы: "",
	})
	const handleAdd = () => {
		dispatch(addValue(macrosOfDish))
		dispatch(addDish([nameOfDish, macrosOfDish]))
		handleClose()
	}
	const handleChange = e => {
		const { name, value } = e.target
		setMacrosOfDish(prev => ({ ...prev, [name]: value }))
	}
	return (
		<>
			<h2>Добавить значения</h2>
			<input
				name='Название'
				type='text'
				placeholder='Название'
				value={nameOfDish}
				onChange={e => setNameOfDish(e.target.value)}
			/>
			<input
				name='Калории'
				type='number'
				placeholder='Калории'
				value={macrosOfDish.Калории}
				onChange={handleChange}
			/>
			<input
				name='Белок'
				type='number'
				placeholder='Белок'
				value={macrosOfDish.Белок}
				onChange={handleChange}
			/>
			<input
				name='Жиры'
				type='number'
				placeholder='Жиры'
				value={macrosOfDish.Жиры}
				onChange={handleChange}
			/>
			<input
				name='Углеводы'
				type='number'
				placeholder='Углеводы'
				value={macrosOfDish.Углеводы}
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
