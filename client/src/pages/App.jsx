import { useState } from "react"
import "../app/styles/index.css"
import Header from "../components/Header/Header.jsx"
import Display from "../components/Display/Display.jsx"

function App() {
	const titlesForDisplay = ["Калории", "Углеводы", "Белки", "Жиры"]

	return (
		<>
			<Header />
			<h1>Сегодня употреблено:</h1>
			{titlesForDisplay.map(title => (
				<Display key={title} title={title} />
			))}
		</>
	)
}

export default App
