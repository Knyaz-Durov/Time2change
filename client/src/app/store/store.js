import { configureStore } from "@reduxjs/toolkit"
import macrosStore from "../features/macros.slice"
import listOfDishesStore from "../features/listOfDishes.slice"
export const store = configureStore({
	reducer: {
		macrosStore: macrosStore,
		listOfDishesStore: listOfDishesStore,
	},
})
