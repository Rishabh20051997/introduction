import style from './about-me-style.module.scss'
import { profilePic } from "../../resources"
import { WhatsAppIcon, LinkedInIcon, GithubIcon, GmailIcon } from '../../resources/icons/social-media-icons';

const AboutMeComponent = ({
    sectionId = '',
    index = 0
}) => {
    return <section id={sectionId} className={style.container}>
        <div className={style.personalInfoContainer}>
            <header className={style.sectionHeader}>Hi I am Rishabh Sharma</header>
            <header className={style.sectionSubHeader}>I am a Software Engineer with experience of 4 years in React Native</header>
            <div className={style.socialMediaContainer}>
                <WhatsAppIcon className={style.socialMediaIcons} />
                <LinkedInIcon className={style.socialMediaIcons} />
                <GithubIcon className={style.socialMediaIcons} />
                <GmailIcon className={style.socialMediaIcons} />
            </div>
            <button className={style.downloadCvButton}>Download CV</button>
        </div>
        <div className={style.profileImageContainer}>
            <img src={profilePic} className={style.profilePicStyle} alt="My Image" />
        </div>
    </section>

}

export default AboutMeComponent