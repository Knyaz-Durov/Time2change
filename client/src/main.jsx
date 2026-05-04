import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import { store } from "./app/store/store.js"
import { Provider } from "react-redux"
import App from "./pages/App.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
)
