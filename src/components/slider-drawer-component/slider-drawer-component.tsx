import styles from './slider-drawer-component-style.module.scss'
import { NAV_LINKS_LIST } from "constant/constant";
import { useCallback } from "react";
import Image from 'widgets/ui-image'
import Text from 'widgets/ui-text'
import { logo } from "resources";
import { useStore } from "store/store";
import { FONT_TYPE } from 'themes';


const SliderDrawerComponent = () => {

    const { sliderVisible, hideSlider } = useStore().slider

    let drawerClasses = styles.sideDrawer
    
    if (sliderVisible) {
        drawerClasses = styles.sideDrawer + ' ' + styles.open
    }

    const onNavBarClicked = useCallback((item: typeof NAV_LINKS_LIST[0]) => {
        hideSlider()
        const anchor = document.querySelector('#' + item.scrollId)
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return (
        <div>
            {sliderVisible ? <div onClick={() => {hideSlider()}} className={styles.backdrop} /> : null}

            <div className={drawerClasses}>
              <Image image={logo} className={styles.logoImage} />
                <div className={styles.navLinks}>
                    {NAV_LINKS_LIST.map(item => {
                        return <Text
                        key={item.key}
                        text={item.displayValue}
                        fontType={FONT_TYPE.TITLE_MEDIUM}
                        onClick={() => onNavBarClicked(item)}
                        className={styles.navLink}
                        textAlign='center'
                        />
                    })}
                </div>
            </div>
        </div>
    )

}

export default SliderDrawerComponent