import style from './education-qualification-component-style.module.scss'


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

const EducationQualificationComponent = ({
       sectionId = '',
       index = 0
   }) => {
       return <section  id={sectionId} className={style.container}>

              <header className={style.sectionHeader}>Education Qualification</header>
              <div className={style.rowContainer}>
                     <EducationItemContainer
                            qualification={'M.Tech'}
                            stream={'Computer Science & Engineering'}
                            institute={'Dronacharya College of Engineering | 2022'}
                            marks={'Percentage - 78.62%'}
                     />
                     <EducationItemContainer
                            qualification={'B.Tech'}
                            stream={'Computer Science & Engineering'}
                            institute={'Dronacharya College of Engineering | 2019'}
                            marks={'Percentage - 72.48%'}
                     />
              </div>

              <div className={style.rowContainer}>
                     <EducationItemContainer
                            qualification={'Ⅻ'}
                            stream={'PCM'}
                            institute={'St. Michael’s Sr. Sec School | 2015'}
                            marks={'Percentage - 84.00%'}
                     />
                     <EducationItemContainer
                            qualification={'Ⅹ'}
                            institute={'St. Michael’s Sr. Sec School | 2013'}
                            marks={'CGPA - 8.60 / 10.0'}
                     />
              </div>
       </section>

}

export default EducationQualificationComponent