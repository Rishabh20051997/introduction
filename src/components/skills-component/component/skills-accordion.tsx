import { useState } from 'react'
import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'

import style from '../skills-component-style.module.scss'
import { RightArrowIcon } from 'resources/icons/vector-icons'

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

        <div onClick={() => updateVisibleStatus(!isVisible)} className={style.listItem}>
            <div className={style.listHeader}>
                <div className={style.listHeaderText}>
                    {headerIcon}
                    <Text
                        text={headerText}
                        color={colors.main.onPrimaryVariant}
                        fontType={FONT_TYPE.LABEL_LARGE}
                        className={style.sectionSubHeader}
                    />
                </div>
                <RightArrowIcon />
            </div>

        </div>
        {isVisible ? <div className={style.bulletListItem}>
            <ul>
                {listData.map(item => {
                    return <li>
                        <Text
                            text={item}
                            color={colors.main.onPrimaryVariant}
                            fontType={FONT_TYPE.BODY_LARGE}
                        />
                    </li>
                })}
            </ul>

        </div> : null}
    </div>
}

export default SkillsAccordionComponent