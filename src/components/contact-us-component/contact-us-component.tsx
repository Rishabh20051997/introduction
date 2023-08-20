import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'
import style from './contact-us-component-style.module.scss'
import ContactUsLabelComponent from './contact-us-label-component'

const ContactUsComponent = () => {

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
                value='kaushikrishabh2005@gmail.com'
            />

            <ContactUsLabelComponent
                label={'PHONE'}
                value='+91 9711138285'
            />

            <ContactUsLabelComponent
                label={'ADDRESS'}
                value='396/1, Bhim Garh Kheri, Gurgaon, India - 122001'
            />

        </div>
    </>

}

export default ContactUsComponent