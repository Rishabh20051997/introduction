import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'
import style from '../education-qualification-component-style.module.scss'

const EducationItemContainer = ({
    qualification = '',
    stream = '',
    institute = '',
    marks = '',
    showBorder = false
}) => {
    return <div className={style.educationItemContainer}>
        <Text
            text={qualification}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.TITLE_LARGE}
            textAlign='center'
        />
        <Text
            text={stream}
            color={colors.main.onPrimaryVariant}
            fontType={FONT_TYPE.TITLE_SMALL}
            textAlign='center'
        />
        <Text
            text={institute}
            color={colors.main.onPrimaryVariant}
            fontType={FONT_TYPE.BODY_LARGE}
            textAlign='center'
        />
        <Text
            text={marks}
            color={colors.main.onPrimaryVariant}
            fontType={FONT_TYPE.BODY_LARGE}
            textAlign='center'
        />
        {showBorder ? <div className={style.lineContainer}>
            <div className={style.line} />
        </div> : null}
    </div>
}

export default EducationItemContainer