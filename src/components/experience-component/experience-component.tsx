
import Text from 'widgets/ui-text'
import { useStore } from 'store/store'
import { FONT_TYPE, colors } from 'themes'
import ExperienceItemContainer from './components/experience-item-container'
import style from './experience-component-style.module.scss'

const ExperienceComponent = () => {
    const { experienceData } = useStore().experienceDetail
    return <>
        <Text
            text={'My Experience'}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.HEADLINE_SMALL}
            className={style.sectionHeader}
        />
        {experienceData.map((item, index) => {
            return <ExperienceItemContainer
                startDate={item.startDate}
                endDate={item.endDate}
                companyName={item.companyName}
                designation={item.designation}
                projectName={item.projectName}
                technologyUsed={item.technologyUsed}
                index={index}
                totalItem={experienceData.length}
            />
        })}
    </>
}

export default ExperienceComponent