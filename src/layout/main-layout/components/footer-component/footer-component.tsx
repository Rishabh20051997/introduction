import Text from 'widgets/ui-text'
import style from './footer-component-style.module.scss'
import { FONT_TYPE, colors } from 'themes'

const FooterComponent = () => {
    return <section className={style.container}>
        <Text
            text={'Copyright © 2023 Rishabh Sharma - All Rights Reserved.'}
            color={colors.main.onPrimaryVariant}
            fontType={FONT_TYPE.LABEL_SMALL}
        />
    </section>
}

export default FooterComponent