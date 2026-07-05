const ListItem = dish => {
	// const  = dish.dish
	console.log(dish)
	return (
		<>
			<h3>Dish {dish.i}</h3>
			<h2>
				К: {+dish.dish[1].Калории} Б: {+dish.dish[1].Белок} Ж:{" "}
				{+dish.dish[1].Жиры} У: {+dish.dish[1].Углеводы}
			</h2>
		</>
	)
}
export default ListItem
