import { useSelector } from "react-redux"

const ListModal = () => {
	const store = useSelector(state => state.listOfDishesStore)
	console.log(store)
	return (
		<>
			{store.map(a => {
				return <h1>{a.Калории}</h1>
			})}
		</>
	)
}

export default ListModal
