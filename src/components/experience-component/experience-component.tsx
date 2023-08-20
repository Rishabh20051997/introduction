
import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'
import ExperienceItemContainer from './components/experience-item-container'
import style from './experience-component-style.module.scss'

const DATA_INFO = [{
    dateRange: 'Dec 2022 - Present',
    experienceCount: '1 year Experience',
    companyName: 'Learning Closet Pvt. Ltd (Exampur)',
    position: 'Senior Software Engineer',
    projectName: 'worked on - Exampur App',
    technologyUsed: 'Technology Used - Typescript, React Native, Redux, MVC pattern',
}, {
    dateRange: 'Nov 2022 - Dec 2022',
    experienceCount: '1 year Experience',
    companyName: 'UpGrad Pvt. Ltd (Exampur)',
    position: 'Senior Software Engineer',
    projectName: 'worked on - Exampur App',
    technologyUsed: 'Technology Used - Typescript, React Native,Redux, MVC pattern',
}, {
    dateRange: 'May 2019 - Oct 2022',
    experienceCount: '1 year Experience',
    companyName: 'Edfora Infotech Pvt. Ltd',
    position: 'Senior Software Engineer',
    projectName: 'worked on - Edfora student & Edfora Teacher App',
    technologyUsed: 'Technology Used - Typescript, React Native, Mobx',
}]

const ExperienceComponent = () => {
    return <>
        <Text
            text={'My Experience'}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.HEADLINE_SMALL}
            className={style.sectionHeader}
        />
        {DATA_INFO.map((item, index) => {
            return <ExperienceItemContainer
                dateRange={item.dateRange}
                experienceCount={item.experienceCount}
                companyName={item.companyName}
                position={item.position}
                projectName={item.projectName}
                technologyUsed={item.technologyUsed}
                index={index}
                totalItem={DATA_INFO.length}
            />
        })}
    </>
}

export default ExperienceComponent