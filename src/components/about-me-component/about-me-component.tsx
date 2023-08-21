import Text from 'widgets/ui-text'
import Image from 'widgets/ui-image'
import { profilePic } from "resources"
import { useStore } from 'store/store';
import { FONT_TYPE, colors } from 'themes';
import AnchorLink from 'widgets/ui-anchor';
import { WhatsAppIcon, LinkedInIcon, GithubIcon, GmailIcon } from 'resources/icons/social-media-icons';
import { experienceCalculator, gmailComposeUrlGenerator, whatsAppUrlGenerator } from 'utils/app-utils';

import style from './about-me-style.module.scss'

const AboutMeComponent = () => {

    const { resumeUrl, socialAccount, mobile, emailId, userName, career, } = useStore().personalInfo
    const { linkedIn, githubUrl } = socialAccount
    const whatsAppUrl = whatsAppUrlGenerator(mobile.number, mobile.isoCode)
    const gmailUrl = gmailComposeUrlGenerator(emailId)
    const totalExperience = experienceCalculator(new Date(career.careerStartDate), new Date())
    return <section className={style.container}>
        <div className={style.profileImageContainer}>
            <Image image={profilePic} className={style.profilePicStyle} />
        </div>
        <div className={style.personalInfoContainer}>
            <Text color={colors.main.onPrimary} fontType={FONT_TYPE.HEADLINE_SMALL} text={`Hi, I am ${userName}`} />
            <Text
                color={colors.main.onPrimaryVariant}
                text={`I am a ${career.careerDesignation} with experience of ${totalExperience} in ${career.language}`}
                fontType={FONT_TYPE.TITLE_MEDIUM} />

            <div className={style.socialMediaContainer}>

                <AnchorLink link={linkedIn.url}>
                    <LinkedInIcon className={style.socialMediaIcons} />
                </AnchorLink>

                <AnchorLink link={githubUrl.url}>
                    <GithubIcon className={style.socialMediaIcons} />
                </AnchorLink>

                <AnchorLink link={gmailUrl}>
                    <GmailIcon className={style.socialMediaIcons} />
                </AnchorLink>

                <AnchorLink link={whatsAppUrl}>
                    <WhatsAppIcon className={style.socialMediaIcons} />
                </AnchorLink>
            </div>

            <AnchorLink link={resumeUrl} className={style.downloadCvButton}>
                <Text color={colors.main.primary} fontType={FONT_TYPE.LABEL_MEDIUM} text={'View CV'} />
            </AnchorLink>
        </div>

    </section>

}

export default AboutMeComponent