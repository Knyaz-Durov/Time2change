import UserButton from "../UserButton/UserButton"
import { NavLink } from "react-router"
import "./Header.css"

const Header = () => {
	return (
		<header>
			<div className='header_content'>
				<NavLink className='logo' to='/'>
					Главная
				</NavLink>
				<UserButton />
			</div>
		</header>
	)
}

export default Header
