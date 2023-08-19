
import ExperienceItemContainer from './components/experience-item-container'
import style from './experience-component-style.module.scss'

const ExperienceComponent = () => {
    return <>
        <header className={style.sectionHeader}>My Experience</header>

        <ExperienceItemContainer
            dateRange={'21 Dec 2022 - present'}
            experienceCount={'1 year Experience'}
            companyName={'Learning Closet Pvt. Ltd (Exampur)'}
            position={'Senior Software Engineer'}
            projectName={'worked on - Exampur App'}
            technologyUsed={'Technology Used - Typescript, React Native, Redux, MVC pattern'}
        />

        <ExperienceItemContainer
            dateRange={'1 November Dec 2022 - 20 Dec 2022'}
            experienceCount={'1 year Experience'}
            companyName={'UpGrad Pvt. Ltd (Exampur)'}
            position={'Senior Software Engineer'}
            projectName={'worked on - Exampur App'}
            technologyUsed={'Technology Used - Typescript, React Native,Redux, MVC pattern'}
        />

        <ExperienceItemContainer
            dateRange={'21  May 2019 - 30 October 2022'}
            experienceCount={'1 year Experience'}
            companyName={'Edfora Infotech Pvt. Ltd'}
            position={'Senior Software Engineer'}
            projectName={'worked on - Edfora student & Edfora Teacher App'}
            technologyUsed={'Technology Used - Typescript, React Native, Mobx'}
        />
    </>
}

export default ExperienceComponent