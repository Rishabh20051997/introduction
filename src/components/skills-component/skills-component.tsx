import { useState } from 'react'
import { ReactIcon, JavascriptIcon, TypescriptIcon } from '../../resources/icons/social-media-icons'
import style from './skills-component-style.module.scss'

const AccordionWrapper = ({
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

const SkillsComponent = ({
    sectionId = '',
    index = 0
}) => {
    return <section  id={sectionId} className={style.container}>
        <header className={style.sectionHeader}>My Skills & Expertise</header>
        <div className={style.listContainer}>
            <AccordionWrapper
                headerIcon={<ReactIcon />}
                headerText='React Native'
                listData={['Details of react native experience -. redux mobx, firebase etc with accordion']}
            />

            <AccordionWrapper
                headerIcon={<ReactIcon />}
                headerText='React'
                listData={['Details of react experience -. redux mobx, firebase etc with accordion']}
            />

            <AccordionWrapper
                headerIcon={<JavascriptIcon />}
                headerText='Javascript'
                listData={['Javascript experience']}
            />

            <AccordionWrapper
                headerIcon={<TypescriptIcon />}
                headerText='Typescript'
                listData={['Javascript experience']}
            />
        </div>
    </section>

}

export default SkillsComponent