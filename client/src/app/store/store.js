import { configureStore } from "@reduxjs/toolkit"
import mainStore from "../features/main.slice"

export const store = configureStore({
	reducer: {
		store: mainStore,
	},
})
