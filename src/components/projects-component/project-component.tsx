import styles from './project-component-style.module.scss'

const ProjectComponent = ({
    sectionId = '',
    index = 0
}) => {

    return <section  id={sectionId}>
        <header>
            My Tech Project
        </header>
        <div>
            All project images with play store path
        </div>
    </section>

}

export default ProjectComponent