import { useCallback, useState } from "react"
import { NAV_LINKS_LIST } from "../../../../constant/constant"
import { logo } from "../../../../resources"
import styles from './nav-bar-style.module.scss'
import { MenuIcon } from "resources/icons/vector-icons"
import { colors } from "themes"
import { useStore } from "store/context"
import Image from 'widgets/ui-image'



const NavBarComponent = () => {

    const [showNavList, updateNavListVisibleStatus] = useState(false)
    const [menuIconColor, updateMenuIconColor] = useState(colors.main.onPrimaryVariant)
    const { showSlider, hideSlider, sliderVisible } = useStore()

    const onNavBarClicked = useCallback((item: typeof NAV_LINKS_LIST[0]) => {
        const anchor = document.querySelector('#' + item.scrollId)
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return <nav className={styles.navbar}>
        <Image image={logo} className={styles.logoImage} />
        <div 
        onMouseEnter={() => updateMenuIconColor(colors.main.onPrimary)} 
        onMouseLeave={() => updateMenuIconColor(colors.main.onPrimaryVariant)}
        onClick={() => {
            updateNavListVisibleStatus(!showNavList)
            showSlider()
        }
        } className={styles.menuIcon} >
            <MenuIcon color={menuIconColor}/>
        </div>
        
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