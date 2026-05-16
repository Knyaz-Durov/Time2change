import { configureStore } from "@reduxjs/toolkit"
import macrosStore from "../features/macros.slice"

export const store = configureStore({
	reducer: {
		macrosStore: macrosStore,
	},
})
