import Text  from 'widgets/ui-text'
import { FONT_TYPE } from 'themes/fonts'
import { colors } from 'themes/colors'
import style from '../experience-component-style.module.scss'


const RenderProgressBar = () => {
    return <div className={style.progressBarContainer}>
        <div className={style.progressBarCircle} />
        <div className={style.progressLine} />
    </div>
}

const ExperienceItemContainer = ({
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
                <Text color={colors.main.onPrimary} text={companyName} fontType={FONT_TYPE.TITLE_EXTRA_LARGE}/>
                <Text text={position} fontType={FONT_TYPE.LABEL_LARGE}/>
                <Text text={projectName} fontType={FONT_TYPE.LABEL_SMALL}/>
                <Text text={technologyUsed} fontType={FONT_TYPE.BODY_LARGE}/>
            </div>
        </div>
    </div>
}

export default ExperienceItemContainer