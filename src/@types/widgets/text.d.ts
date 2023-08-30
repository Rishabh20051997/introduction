

type IFontType = {
    [key in IFontTypeKey]: IFontTypeProp;
};

type TextAlign = import('csstype').Property.TextAlign

  type IFontTypeProp = string

  type IFontTypeKey = 'HEADLINE_LARGE' |
  'HEADLINE_MEDIUM' |
  'HEADLINE_SMALL' |
  'TITLE_EXTRA_LARGE' |
  'TITLE_LARGE' |
  'TITLE_MEDIUM' |
  'TITLE_SMALL' |
  'LABEL_LARGE' |
  'LABEL_MEDIUM' |
  'LABEL_SMALL' |
  'BODY_LARGE_BOLD' |
  'BODY_LARGE' |
  'BODY_MEDIUM' |
  'BODY_SMALL' |
  'BODY_EXTRA_SMALL';


  interface ITextProps {
    // text to render
     text?: string | number
   
     // Font type
     fontType?: IFontTypeProp;
   
     // Font color
     color?: string;
   
     // Alignment of text
     textAlign?: TextAlign | undefined;
   
     // Styling for text
     className?: string

     textPadding?:string
   
     // text to render
     children?: ReactNode

     onClick?: () => void
   }