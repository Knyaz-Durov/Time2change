import { createSlice } from "@reduxjs/toolkit"
const macrosInitialState = {
	Калории: 0,
	Белок: 0,
	Жиры: 0,
	Углеводы: 0,
}
const macrosSlice = createSlice({
	name: "macrosStore",
	initialState: macrosInitialState,
	reducers: {
		addValue: (state, actions) => {
			for (let key in actions.payload) {
				state[key] += +actions.payload[key]
			}
		},
	},
})

export const { addValue } = macrosSlice.actions
export default macrosSlice.reducer
