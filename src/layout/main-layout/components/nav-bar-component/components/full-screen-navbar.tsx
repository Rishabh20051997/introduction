import { useCallback } from "react"
import Text from 'widgets/ui-text'
import { NAV_LINKS_LIST } from "constant/constant"
import styles from '../nav-bar-style.module.scss'

const FullScreenNavBar = () => {
    const onNavBarClicked = useCallback((item: typeof NAV_LINKS_LIST[0]) => {
        const anchor = document.querySelector('#' + item.scrollId)
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])
    
    return <div className={styles.navLinks}>
            {NAV_LINKS_LIST.map(item => {
                return <Text
                key={item.key}
                text={item.displayValue}
                onClick={() => onNavBarClicked(item)}
                className={styles.navLink}
                />
            })}
        </div>
}

export default FullScreenNavBar