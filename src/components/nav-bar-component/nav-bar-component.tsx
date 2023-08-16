import { logo } from "../../resources"
import './nav-bar-style.scss'

const NAV_LINKS = [{
    key: 'about',
    displayValue: 'About me'
}, {
    key: 'skills',
    displayValue: 'Skills'
}, {
    key: 'experience',
    displayValue: 'Experience'
}, {
    key: 'project',
    displayValue: 'Projects'
}, {
    key: 'education',
    displayValue: 'Education Qualification'
}, {
    key: 'contact',
    displayValue: 'Contact'
}]
const NavBarComponent = () => {
    return <nav className="navbar">
        <img src={logo} height={60} width={60} alt="city tours logo" />
        <div className="nav-links">
            {NAV_LINKS.map(item => {
                return <a href='/' className="nav-link">{item.displayValue}</a>
            })}
        </div>
    </nav>

}

export default NavBarComponent