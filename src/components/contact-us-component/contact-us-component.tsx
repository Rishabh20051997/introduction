import Text from 'widgets/ui-text'
import { useStore } from 'store/store'
import { FONT_TYPE, colors } from 'themes'
import ContactUsLabelComponent from './contact-us-label-component'
import style from './contact-us-component-style.module.scss'

const ContactUsComponent = () => {

    const { 
        mobile: { number, isoCode},
        address,
        emailId

} = useStore().personalInfo

    return <>
        <Text
            text={'Get In Touch'}
            color={colors.main.onPrimary}
            fontType={FONT_TYPE.HEADLINE_SMALL}
            className={style.sectionHeader}
        />

        <div className={style.innerContainer}>
            <ContactUsLabelComponent
                label={'EMAIL'}
                value={emailId}
            />

            <ContactUsLabelComponent
                label={'PHONE'}
                value={'+' + isoCode + ' ' + number}
            />

            <ContactUsLabelComponent
                label={'ADDRESS'}
                value={address}
            />

        </div>
    </>

}

export default ContactUsComponent