import style from './footer-component-style.module.scss'

const FooterComponent = ({
    sectionId = '',
    index = 0
}) => {
    return <section className={style.container}>
       <p className={style.copyRightText}> Copyright © 2022 Rishabh Sharma - All Rights Reserved.</p>
    </section>
}

export default FooterComponent