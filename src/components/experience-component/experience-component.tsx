import style from './experience-component-style.module.scss'

const RenderProgressBar = () => {
    return <div className={style.progressBarContainer}>
        <div className={style.progressBarCircle} />
        <div className={style.progressLine} />
    </div>
}

const RenderExperienceItem = ({
    dateRange = '',
    experienceCount = '',
    companyName = '',
    position = '',
    projectName = '',
    technologyUsed = ''
}) => {
    return <div className={style.experienceItemContainer}>
        <div className={style.leftContainer}>
            <p className={style.sectionSubHeader}>{dateRange}</p>
            <p className={style.experienceText}>{experienceCount}</p>
        </div>
        <RenderProgressBar />
        <div className={style.rightContainer}>
            <div className={style.cardContainer}>
                <p className={style.companyName}>{companyName}</p>
                <p className={style.positionText}>{position}</p>
                <p className={style.projectDetails}>{projectName}</p>
                <p className={style.experienceDetails}>{technologyUsed}</p>
            </div>
        </div>
    </div>
}

const ExperienceComponent = ({
    sectionId = '',
    index = 0
}) => {
    return <section  id={sectionId} className={style.container}>

        <header className={style.sectionHeader}>My Experience</header>

        <RenderExperienceItem
            dateRange={'21 Dec 2022 - present'}
            experienceCount={'1 year Experience'}
            companyName={'Learning Closet Pvt. Ltd (Exampur)'}
            position={'Senior Software Engineer'}
            projectName={'worked on - Exampur App'}
            technologyUsed={'Technology Used - Typescript, React Native, Redux, MVC pattern'}
        />

        <RenderExperienceItem
            dateRange={'1 November Dec 2022 - 20 Dec 2022'}
            experienceCount={'1 year Experience'}
            companyName={'UpGrad Pvt. Ltd (Exampur)'}
            position={'Senior Software Engineer'}
            projectName={'worked on - Exampur App'}
            technologyUsed={'Technology Used - Typescript, React Native,Redux, MVC pattern'}
        />

        <RenderExperienceItem
            dateRange={'21  May 2019 - 30 October 2022'}
            experienceCount={'1 year Experience'}
            companyName={'Edfora Infotech Pvt. Ltd'}
            position={'Senior Software Engineer'}
            projectName={'worked on - Edfora student & Edfora Teacher App'}
            technologyUsed={'Technology Used - Typescript, React Native, Mobx'}
        />
    </section>
}

export default ExperienceComponent