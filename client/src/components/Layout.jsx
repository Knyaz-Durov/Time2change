import { Outlet } from "react-router-dom"
import Header from "./Header/Header"

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<div className='content'>
					<div className='content__container'>
						<Outlet />
					</div>
				</div>
			</main>
		</>
	)
}

export default Layout
