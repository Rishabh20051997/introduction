import Text from 'widgets/ui-text'
import { FONT_TYPE } from 'themes/fonts'
import { colors } from 'themes/colors'
import style from '../experience-component-style.module.scss'


const RenderProgressBar = ({
    index = 0,
    totalItem = 0
}) => {

    const styleProps = index === 0 ? { bottom: 0, height: '50%' } : (index === totalItem - 1) ? { top: 0, height: '50%' } : {}
    return <div className={style.progressBarContainer}>
        <div className={style.progressBarCircle} />
        <div style={styleProps} className={style.progressLine} />
    </div>
}

const ExperienceItemContainer = ({
    dateRange = '',
    experienceCount = '',
    companyName = '',
    position = '',
    projectName = '',
    technologyUsed = '',
    index = 0,
    totalItem = 0
}) => {
    return <div className={style.experienceItemContainer}>
        <div className={style.leftContainer}>
            <div>
                <Text color={colors.main.onPrimary} text={dateRange} fontType={FONT_TYPE.LABEL_LARGE} />
                <Text color={colors.main.onPrimaryVariant} text={experienceCount} fontType={FONT_TYPE.LABEL_SMALL} />
            </div>
        </div>
        <RenderProgressBar index={index} totalItem={totalItem} />
        <div className={style.rightContainer}>
            <div className={style.cardContainer}>
                <Text color={colors.main.onPrimary} text={companyName} fontType={FONT_TYPE.TITLE_EXTRA_LARGE} />
                <Text color={colors.main.onPrimaryVariant} text={position} fontType={FONT_TYPE.LABEL_LARGE} />
                <Text color={colors.main.onPrimaryVariant} text={projectName} fontType={FONT_TYPE.LABEL_SMALL} />
                <Text color={colors.main.onPrimaryVariant} text={technologyUsed} fontType={FONT_TYPE.BODY_LARGE} />
            </div>
        </div>
    </div>
}

export default ExperienceItemContainer