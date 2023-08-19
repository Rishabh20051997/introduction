import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"
import { CgMail } from "react-icons/cg"

const WhatsAppIcon = ({ size = '6vmin', className = '' }) => {
    return <FaWhatsapp color='#25D366' size={size} className={className} />
}

const LinkedInIcon = ({ size = '6vmin', className = ''}) => {
    return <FaLinkedin color='#55ACEE' size={size} className={className} />
}

const GithubIcon = ({ size = '6vmin', className = '' }) => {
    return <FaGithub color='#55ACEE' size={size} className={className}/>
}

const GmailIcon = ({ size = '6vmin', className = '' }) => {
    return <CgMail color='#e24134' size={size} className={className} />
}



export {
    WhatsAppIcon,
    LinkedInIcon,
    GithubIcon,
    GmailIcon
}