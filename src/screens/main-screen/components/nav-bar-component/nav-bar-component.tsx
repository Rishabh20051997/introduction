import { useCallback } from "react"
import { NAV_LINKS_LIST } from "../../../../constant/constant"
import { logo } from "../../../../resources"
import styles from './nav-bar-style.module.scss'



const NavBarComponent = () => {
    const onNavBarClicked = useCallback((item: typeof NAV_LINKS_LIST[0]) => {
        const anchor = document.querySelector('#' + item.scrollId)
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return <nav className={styles.navbar}>
        <img src={logo} height={60} width={60} alt="city tours logo" />
        <div className={styles.navLinks}>
            {NAV_LINKS_LIST.map(item => {
                return <a
                    onClick={() => onNavBarClicked(item)}
                    className={styles.navLink}>
                    {item.displayValue}
                </a>
            })}
        </div>
    </nav>
}

export default NavBarComponent