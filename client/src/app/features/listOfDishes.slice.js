import { createSlice } from "@reduxjs/toolkit"

const listOfAddedInitialState = []

const listOfDishesSlice = createSlice({
	name: "listOfDishesStore",
	initialState: listOfAddedInitialState,
	reducers: {
		addDish: (state, actions) => {
			state.push(actions.payload)
		},
	},
})

export const { addDish } = listOfDishesSlice.actions
export default listOfDishesSlice.reducer
