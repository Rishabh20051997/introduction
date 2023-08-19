import { memo } from "react";
import { FONT_TYPE } from "themes/fonts";
import { getFontSize } from "./ui-text-helper";


const Text = ({
    text = '',
    fontType = FONT_TYPE.LABEL_MEDIUM,
    color = 'white',
    textAlign ='left',
    className = '',
    children
}: ITextProps) => {

    const { fontWeight, fontSize } = getFontSize(fontType)

    return <p
        style={{
            color,
            textAlign: textAlign,
            fontSize,
            fontWeight,
            padding: '0.5rem',
            margin: 0
        }}
        className={className}
    >
        {children || text || ''}
    </p>

}

export default memo(Text)