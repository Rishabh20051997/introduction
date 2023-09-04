import { memo } from "react";
import { FONT_TYPE } from "themes/fonts";
import { getFontTextClass } from "./ui-text-helper";
import styles from './ui-text-style.module.scss'


const Text = ({
    text = '',
    fontType = FONT_TYPE.LABEL_MEDIUM,
    color,
    textAlign = 'left',
    className = '',
    textPadding = '0.5vh',
    onClick,
    children,
}: ITextProps) => {

    const { class: defaultClass, tag : Tag= 'p' as any } = getFontTextClass(fontType)

    return <Tag
        className={styles[defaultClass] + ' ' + className}
        style={{
            color,
            textAlign: textAlign,
            padding: textPadding,
        }}
        onClick={onClick}
    >
        {children || text || ''}
    </Tag>

}

export default memo(Text)