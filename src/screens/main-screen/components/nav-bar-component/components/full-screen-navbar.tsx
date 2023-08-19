import { NAV_LINKS_LIST } from "constant/constant"
import styles from '../nav-bar-style.module.scss'
import { useCallback } from "react"

const FullScreenNavBar = () => {
    const onNavBarClicked = useCallback((item: typeof NAV_LINKS_LIST[0]) => {
        const anchor = document.querySelector('#' + item.scrollId)
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])
    
    return <div className={styles.navLinks}>
            {NAV_LINKS_LIST.map(item => {
                return <a
                    onClick={() => onNavBarClicked(item)}
                    className={styles.navLink}>
                    {item.displayValue}
                </a>
            })}
        </div>
}

export default FullScreenNavBar