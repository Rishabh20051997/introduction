import { BiMenu } from "react-icons/bi"
import { MdKeyboardArrowRight } from "react-icons/md"

const MenuIcon = ({ size = '6vmin', color='#fff', className = '' }) => {
        return <BiMenu color={color} size={size} className={className} />    
}

const RightArrowIcon = ({ size = '3vmin', color='#fff', className = '' }) => {
    return <MdKeyboardArrowRight color={color} size={size} className={className} />    
}



export {
    MenuIcon,
    RightArrowIcon
}