import styles from '../nav-bar-style.module.scss'
import { useState } from "react"
import { colors } from 'themes'
import { MenuIcon } from 'resources/icons/vector-icons'
import { useStore } from 'store/store'



const MobileScreenNavbar = () => {

    const [showNavList, updateNavListVisibleStatus] = useState(false)
    const [menuIconColor, updateMenuIconColor] = useState(colors.main.onPrimaryVariant)
    const { showSlider } = useStore().slider
    
   return  <div
    onMouseEnter={() => updateMenuIconColor(colors.main.onPrimary)}
    onMouseLeave={() => updateMenuIconColor(colors.main.onPrimaryVariant)}
    onClick={() => {
        updateNavListVisibleStatus(!showNavList)
        showSlider()
    }
    } className={styles.menuIcon} >
    <MenuIcon color={menuIconColor} />
</div>
}

export default MobileScreenNavbar