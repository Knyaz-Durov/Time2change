import { useDispatch, useSelector } from "react-redux"
import ListItem from "./ListItem"

const ListModal = ({ isOpen, onClose }) => {
	const dishes = useSelector(state => state.listOfDishesStore)
	const dispatch = useDispatch()

	// console.log(dishes)
	return (
		<>
			{dishes.map((dish, i) => {
				return <ListItem dish={dish} i={++i} key={i} />
			})}
		</>
	)
}

export default ListModal
