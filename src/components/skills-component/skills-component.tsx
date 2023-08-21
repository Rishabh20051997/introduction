import Text from 'widgets/ui-text'
import { useStore } from 'store/store'
import { FONT_TYPE, colors } from 'themes'
import SkillsAccordionComponent from './component/skills-accordion'
import { ReactIcon, JavascriptIcon, TypescriptIcon } from 'resources/icons/language-icons'

import style from './skills-component-style.module.scss'

const ICON_MAP = new Map([
    ['React Native', ReactIcon],
    ['React', ReactIcon],
    ['Javascript', JavascriptIcon],
    ['Typescript', TypescriptIcon],

])

const SkillsComponent = () => {
    const { skillsSet } = useStore().skillSetInfo
    return <>
        <Text
            text={'My Skills & Expertise'}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.HEADLINE_SMALL}
            className={style.sectionHeader}
        />
        <div className={style.listContainer}>
            {skillsSet.map((item) => {
                const Icon = ICON_MAP.get(item.language) || ReactIcon
                return <SkillsAccordionComponent
                headerIcon={<Icon />}
                headerText={item.language}
                listData={item.skillsInfoList}
            />
            })}
        </div>
    </>

}

export default SkillsComponent