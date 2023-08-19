
import { ReactIcon, JavascriptIcon, TypescriptIcon } from 'resources/icons/language-icons'
import SkillsAccordionComponent from './component/skills-accordion'
import style from './skills-component-style.module.scss'

const SkillsComponent = () => {
    return <>
        <header className={style.sectionHeader}>My Skills & Expertise</header>
        <div className={style.listContainer}>
            <SkillsAccordionComponent
                headerIcon={<ReactIcon />}
                headerText='React Native'
                listData={['Details of react native experience -. redux mobx, firebase etc with accordion']}
            />

            <SkillsAccordionComponent
                headerIcon={<ReactIcon />}
                headerText='React'
                listData={['Details of react experience -. redux mobx, firebase etc with accordion']}
            />

            <SkillsAccordionComponent
                headerIcon={<JavascriptIcon />}
                headerText='Javascript'
                listData={['Javascript experience']}
            />

            <SkillsAccordionComponent
                headerIcon={<TypescriptIcon />}
                headerText='Typescript'
                listData={['Javascript experience']}
            />
        </div>
    </>

}

export default SkillsComponent