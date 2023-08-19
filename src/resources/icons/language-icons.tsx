import { FaReact } from "react-icons/fa"
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"

const ReactIcon = ({ size = '4vmin', className = '' }) => {
    return <FaReact color='#61dafb' size={size} className={className} />
}

const JavascriptIcon = ({ size = '4vmin', className = '' }) => {
    return <BiLogoJavascript color='#f7d803' size={size} className={className} />
}

const TypescriptIcon = ({ size = '4vmin', className = '' }) => {
    return <BiLogoTypescript color='#2f73bf' size={size} className={className} />
}

export {
    ReactIcon,
    JavascriptIcon,
    TypescriptIcon
}
