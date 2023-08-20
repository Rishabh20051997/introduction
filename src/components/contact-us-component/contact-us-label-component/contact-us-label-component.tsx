import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'
import style from '../contact-us-component-style.module.scss'

const ContactUsLabelComponent = ({
    label = '',
    value = ''
}) => {
    return <div className={style.infoContainer}>
        <Text
            text={label}
            color={colors.main.onPrimaryVariant}
            fontType={FONT_TYPE.LABEL_MEDIUM}
            className={style.sectionHeader}
        />
        <Text
            text={value}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.LABEL_LARGE}
            className={style.sectionHeader}
        />
    </div>
}

export default ContactUsLabelComponent