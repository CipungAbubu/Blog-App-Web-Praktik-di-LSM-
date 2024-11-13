import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="logo-app">NeoCity Updates</NavLink>
        </header>
    )
}

export default Header;
