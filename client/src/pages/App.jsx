import { useState } from "react"
import "../app/styles/index.css"
import Header from "../components/Header/Header.jsx"
import Display from "../components/Display/Display.jsx"
import AddButton from "../components/InteractButtons/InteractButtons.jsx"
import InteractButtons from "../components/InteractButtons/InteractButtons.jsx"
import InteractModal from "../components/InteractModal/InteractModal.jsx"

function App() {
	const titlesForDisplay = ["Калории", "Белок", "Жиры", "Углеводы"]
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {
		setIsOpen(true)
	}

	const handleClose = () => {
		setIsOpen(false)
	}
	return (
		<>
			<Header />
			<div className='content'>
				<div className='content__container'>
					{isOpen ? (
						<InteractModal handleClose={handleClose} />
					) : (
						<>
							<h1>Сегодня употреблено:</h1>
							{titlesForDisplay.map(title => (
								<Display key={title} title={title} />
							))}
							<InteractButtons
								handleOpen={handleOpen}
								handleClose={handleClose}
							/>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default App
