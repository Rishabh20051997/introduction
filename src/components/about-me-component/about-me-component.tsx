import Text from 'widgets/ui-text'
import Image from 'widgets/ui-image'
import { profilePic } from "resources"
import { FONT_TYPE, colors } from 'themes';
import { WhatsAppIcon, LinkedInIcon, GithubIcon, GmailIcon } from 'resources/icons/social-media-icons';

import style from './about-me-style.module.scss'

const AboutMeComponent = () => {
    return <section className={style.container}>
         <div className={style.profileImageContainer}>
            <Image image={profilePic} className={style.profilePicStyle}/>
        </div>
        <div className={style.personalInfoContainer}>
            <Text color={colors.main.onPrimary} fontType={FONT_TYPE.HEADLINE_SMALL} text={'Hi I am Rishabh Sharma'}/>
            <Text color={colors.main.onPrimaryVariant} text={'I am a Software Engineer with experience of 4 years in React Native'} fontType={FONT_TYPE.TITLE_MEDIUM}/>
            <div className={style.socialMediaContainer}>
                <WhatsAppIcon className={style.socialMediaIcons} />
                <LinkedInIcon className={style.socialMediaIcons} />
                <GithubIcon className={style.socialMediaIcons} />
                <GmailIcon className={style.socialMediaIcons} />
            </div>
            <button className={style.downloadCvButton}>
                <Text color={colors.main.primary} fontType={FONT_TYPE.LABEL_MEDIUM} text={'Download CV'}/>
            </button>
        </div>
       
    </section>

}

export default AboutMeComponent