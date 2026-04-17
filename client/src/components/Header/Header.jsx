import UserButton from '../UserButton/UserButton'
import './Header.css'

const Header = () => {
    return <header>
        <div className="header_content">
            <div className="logo">Главная</div>        
            <UserButton />
        </div>
    </header>
}

export default Header