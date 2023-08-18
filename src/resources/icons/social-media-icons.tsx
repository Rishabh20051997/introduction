import { FaWhatsapp, FaLinkedin, FaGithub, FaReact } from "react-icons/fa"
import { CgMail } from "react-icons/cg"
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"

const WhatsAppIcon = ({ size = 60, className = '' }) => {
    return <FaWhatsapp color='#25D366' size={size} className={className} />
}

const LinkedInIcon = ({ size = 60, className = ''}) => {
    return <FaLinkedin color='#55ACEE' size={size} className={className} />
}

const GithubIcon = ({ size = 60, className = '' }) => {
    return <FaGithub color='#55ACEE' size={size} className={className}/>
}

const GmailIcon = ({ size = 60, className = '' }) => {
    return <CgMail color='#e24134' size={size} className={className} />
}

const ReactIcon = ({ size = 30, className = '' }) => {
    return <FaReact color='#61dafb' size={size} className={className} />
}

const JavascriptIcon = ({ size = 30, className = '' }) => {
    return <BiLogoJavascript color='#f7d803' size={size} className={className} />
}

const TypescriptIcon = ({ size = 30, className = '' }) => {
    return <BiLogoTypescript color='#2f73bf' size={size} className={className} />
}


export {
    WhatsAppIcon,
    LinkedInIcon,
    GithubIcon,
    GmailIcon,
    ReactIcon,
    JavascriptIcon,
    TypescriptIcon
}