import { logo } from "../../../../resources"
import styles from './nav-bar-style.module.scss'
import Image from 'widgets/ui-image'
import FullScreenNavBar from "./components/full-screen-navbar"
import MobileScreenNavbar from "./components/mobile-screen-navbar"



const NavBarComponent = () => {
    return <nav className={styles.navbar}>
        <Image image={logo} className={styles.logoImage} />
        <FullScreenNavBar/>
        <MobileScreenNavbar/>
    </nav>
}

export default NavBarComponent