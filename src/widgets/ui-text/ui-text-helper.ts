import { FONT_TYPE } from "themes/fonts"

export const getFontTextClass = (fontType: IFontTypeProp) => {
    switch (fontType) {
        // headline tags
        case FONT_TYPE.HEADLINE_LARGE:
            return { class : 'headingLarge', tag: 'h1' }

        case FONT_TYPE.HEADLINE_MEDIUM:
            return { class : 'headingMedium', tag: 'h1' }

        case FONT_TYPE.HEADLINE_SMALL:
            return { class : 'headingSmall', tag: 'h1' }

        // title tags
        case FONT_TYPE.TITLE_EXTRA_LARGE:
            return { class : 'titleExtraLarge', tag: 'h2'}

        case FONT_TYPE.TITLE_LARGE:
            return { class : 'titleLarge', tag: 'h2' }

        case FONT_TYPE.TITLE_MEDIUM:
            return { class : 'titleMedium', tag: 'h2' }

        case FONT_TYPE.TITLE_SMALL:
            return { class : 'titleSmall', tag: 'h2' }

        // label tags
        case FONT_TYPE.LABEL_LARGE:
            return { class : 'labelLarge',  tag: 'h3' }

        case FONT_TYPE.LABEL_MEDIUM:
            return { class : 'labelMedium',  tag: 'h3' }

        case FONT_TYPE.LABEL_SMALL:
            return { class : 'labelSmall',  tag: 'h3' }

        // body tags
        case FONT_TYPE.BODY_LARGE_BOLD:
            return { class : 'bodyLargeBold',  tag: 'p' }

        case FONT_TYPE.BODY_LARGE:
            return { class : 'bodyLarge',  tag: 'p' }

        case FONT_TYPE.BODY_MEDIUM:
            return { class : 'bodyMedium',  tag: 'p' }

        case FONT_TYPE.BODY_SMALL:
            return { class : 'bodySmall',  tag: 'p' }

        case FONT_TYPE.BODY_EXTRA_SMALL:
        default:
            return { class : 'bodyExtraSmall',  tag: 'p' }
    }

}