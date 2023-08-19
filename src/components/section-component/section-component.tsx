import { colors } from 'themes/colors'
import styles from './section-component-style.module.scss'

const SectionComponent = ({
    index = 0,
    id = '',
    children = null
} : {
    index: number,
    id: string,
    children: ReactNode | null
}) => {

    return <section 
    id={id} 
    style={{
        backgroundColor: index%2 ? colors.main.primary : colors.main.primaryVariant
    }}
    className={styles.container}
    >
        {children}
    </section>

}

export default SectionComponent