import { NavLink } from "react-router"
import "./Header.css"

const Header = () => {
	return (
		<header>
			<div className='header_content'>
				<NavLink className='logo' to='/'>
					Главная
				</NavLink>
				<NavLink to='/profile' className='profile-button' />
			</div>
		</header>
	)
}

export default Header
