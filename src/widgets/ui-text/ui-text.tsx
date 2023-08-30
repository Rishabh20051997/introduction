import { memo } from "react";
import { FONT_TYPE } from "themes/fonts";
import { getFontSize } from "./ui-text-helper";


const Text = ({
    text = '',
    fontType = FONT_TYPE.LABEL_MEDIUM,
    color = 'white',
    textAlign ='left',
    className = '',
    textPadding = '0.5vh',
    onClick,
    children,
}: ITextProps) => {

    const { fontWeight, fontSize } = getFontSize(fontType)

    return <p
    className={className}
        style={{
            color,
            textAlign: textAlign,
            fontSize,
            fontWeight,
            padding: textPadding,
            margin: 0
        }}
        onClick={onClick}
    >
        {children || text || ''}
    </p>

}

export default memo(Text)