import Text from 'widgets/ui-text'
import Image from 'widgets/ui-image'
import { profilePic } from "resources"
import { FONT_TYPE, colors } from 'themes';
import { WhatsAppIcon, LinkedInIcon, GithubIcon, GmailIcon } from 'resources/icons/social-media-icons';

import style from './about-me-style.module.scss'

const AboutMeComponent = () => {
    return <section className={style.container}>
        <div className={style.profileImageContainer}>
            <Image image={profilePic} className={style.profilePicStyle} />
        </div>
        <div className={style.personalInfoContainer}>
            <Text color={colors.main.onPrimary} fontType={FONT_TYPE.HEADLINE_SMALL} text={'Hi I am Rishabh Sharma'} />
            <Text color={colors.main.onPrimaryVariant} text={'I am a Software Engineer with experience of 4 years in React Native'} fontType={FONT_TYPE.TITLE_MEDIUM} />
            <div className={style.socialMediaContainer}>
                <a href='https://api.whatsapp.com/send/?phone=919711138285' target="_blank">
                    <WhatsAppIcon className={style.socialMediaIcons} />
                </a>
                <a href='https://www.linkedin.com/in/rishabh-sharma-20051997' target="_blank">
                    <LinkedInIcon className={style.socialMediaIcons} />
                </a>
                <a href='https://github.com/Rishabh20051997/' target="_blank">
                    <GithubIcon className={style.socialMediaIcons} />
                </a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=kaushikrishabh2005@gmail.com' target="_blank">
                    <GmailIcon className={style.socialMediaIcons} />
                </a>
            </div>
            <a 
            href='https://drive.google.com/file/d/13MogRMwTCBI_-G2tZ3PVAgfBmX3F7yS9/view?usp=sharing'
            target="_blank"
            className={style.downloadCvButton}>
                <Text color={colors.main.primary} fontType={FONT_TYPE.LABEL_MEDIUM} text={'View CV'} />
            </a>
        </div>

    </section>

}

export default AboutMeComponent