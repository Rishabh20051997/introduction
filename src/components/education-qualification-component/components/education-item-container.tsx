import style from '../education-qualification-component-style.module.scss'

const EducationItemContainer = ({
    qualification = '',
    stream = '',
    institute = '',
    marks = ''
}) => {
    return <div className={style.educationItemContainer}>
           <p className={style.qualificationText}>{qualification}</p>
           {stream ? <p className={style.streamText}>{stream}</p> : null}
           <p className={style.instituteDetails}>{institute}</p>
           <p className={style.marksInfo}>{marks}</p>
    </div>
}

export default EducationItemContainer