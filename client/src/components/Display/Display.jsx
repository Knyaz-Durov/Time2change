import { useDispatch, useSelector } from "react-redux"
import "./display.css"

const Display = ({ title }) => {
	const store = useSelector(state => state.store)
	const dispatch = useDispatch()

	return (
		<div className='display'>
			<h2>
				{title}: {store[title]} / 100
			</h2>
		</div>
	)
}

export default Display
