import { FONT_TYPE } from "themes/fonts"

export const getFontSize = (fontType: IFontTypeProp) => {
    switch (fontType) {
        // headline tags
        case FONT_TYPE.HEADLINE_LARGE:
            return { fontWeight: 'bolder', fontSize: `calc(16px + 3vmin)` }

        case FONT_TYPE.HEADLINE_MEDIUM:
            return { fontWeight: 'bolder', fontSize: `calc(14px + 2.8vmin)` }

        case FONT_TYPE.HEADLINE_SMALL:
            return { fontWeight: 'bolder', fontSize: `calc(12px + 2.6vmin)` }

        // title tags
        case FONT_TYPE.TITLE_EXTRA_LARGE:
            return { fontWeight: 'bolder', fontSize: `calc(10px + 2.4vmin)` }

        case FONT_TYPE.TITLE_LARGE:
            return { fontWeight: 'bold', fontSize: `calc(10px + 2.2.vmin)` }

        case FONT_TYPE.TITLE_MEDIUM:
            return { fontWeight: '600', fontSize: `calc(10px + 2vmin)` }

        case FONT_TYPE.TITLE_SMALL:
            return { fontWeight: '600', fontSize: `calc(9px + 1.8vmin)` }

        // label tags
        case FONT_TYPE.LABEL_LARGE:
            return { fontWeight: 'normal', fontSize: `calc(8px + 1.6vmin)` }

        case FONT_TYPE.LABEL_MEDIUM:
            return { fontWeight: 'normal', fontSize: `calc(7px + 1.4vmin)` }

        case FONT_TYPE.LABEL_SMALL:
            return { fontWeight: 'normal', fontSize: `calc(6px + 1.2vmin)` }

        // body tags
        case FONT_TYPE.BODY_LARGE_BOLD:
            return { fontWeight: 'bold', fontSize: `calc(6px + 1vmin)` }

        case FONT_TYPE.BODY_LARGE:
            return { fontWeight: 'normal', fontSize: `calc(6px + 1vmin)` }

        case FONT_TYPE.BODY_MEDIUM:
            return { fontWeight: 'normal', fontSize: `calc(4px + 0.8vmin)` }

        case FONT_TYPE.BODY_SMALL:
            return { fontWeight: 'normal', fontSize: `calc(2px + 0.6vmin)` }

        case FONT_TYPE.BODY_EXTRA_SMALL:
        default:
            return { fontWeight: 'normal', fontSize: `calc(2px + 0.4vmin)` }
    }

}