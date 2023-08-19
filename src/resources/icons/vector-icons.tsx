import { BiMenu } from "react-icons/bi"

const MenuIcon = ({ size = '6vmin', color='#fff', className = '' }) => {
        return <BiMenu color={color} size={size} className={className} />    
}

export {
    MenuIcon
}