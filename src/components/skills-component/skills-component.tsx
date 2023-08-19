
import { ReactIcon, JavascriptIcon, TypescriptIcon } from 'resources/icons/language-icons'
import SkillsAccordionComponent from './component/skills-accordion'
import Text from 'widgets/ui-text'
import style from './skills-component-style.module.scss'
import { FONT_TYPE, colors } from 'themes'

const SkillsComponent = () => {
    return <>
        <Text
            text={'My Skills & Expertise'}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.HEADLINE_SMALL}
            className={style.sectionHeader}
        />
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