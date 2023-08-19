import { useCallback, useState } from "react"
import { NAV_LINKS_LIST } from "../../../../constant/constant"
import { logo } from "../../../../resources"
import styles from './nav-bar-style.module.scss'
import { MenuIcon } from "resources/icons/vector-icons"
import { colors } from "themes"
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