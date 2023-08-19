import { useState } from 'react'

import style from '../skills-component-style.module.scss'

const SkillsAccordionComponent = ({
    headerIcon,
    headerText,
    listData
}: {
    headerIcon: JSX.Element
    headerText: string
    listData: string[]
}) => {

    const [isVisible, updateVisibleStatus] = useState(true)
    return <div className={style.listItemContainer}>
        <header onClick={() => updateVisibleStatus(!isVisible)} className={style.listItem}>
            {headerIcon}
            <header className={style.sectionSubHeader}>{headerText}</header>
        </header>
        {isVisible ? <p className={style.bulletListItem}>
            <ul>
                {listData.map(item => {
                    return <li>{item}</li>
                })}
            </ul>

        </p> : null}
    </div>
}

export default SkillsAccordionComponent