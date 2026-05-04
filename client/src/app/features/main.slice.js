import { createSlice } from "@reduxjs/toolkit"
const store = {
	Калории: 0,
	Белок: 0,
	Жиры: 0,
	Углеводы: 0,
}
const mainSlice = createSlice({
	name: "store",
	initialState: store,
	reducers: {
		addValue: (state, actions) => {
			for (let key in actions.payload) {
				state[key] += +actions.payload[key]
			}
		},
	},
})

export const { addValue } = mainSlice.actions
export default mainSlice.reducer
