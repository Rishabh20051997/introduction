import EducationItemContainer from './components/education-item-container'
import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'
import style from './education-qualification-component-style.module.scss'

const EducationQualificationComponent = () => {
       return <>
              <header className={style.sectionHeader}></header>
              <Text
                     text={'Education Qualification'}
                     color={colors.main.onPrimary}
                     fontType={FONT_TYPE.HEADLINE_SMALL}
                     className={style.sectionHeader}
              />
              <div className={style.rowContainer}>
                     <EducationItemContainer
                            qualification={'M.Tech'}
                            stream={'Computer Science & Engineering'}
                            institute={'Dronacharya College of Engineering | 2022'}
                            marks={'Percentage - 78.62%'}
                            showBorder={true}
                     />
                     <EducationItemContainer
                            qualification={'B.Tech'}
                            stream={'Computer Science & Engineering'}
                            institute={'Dronacharya College of Engineering | 2019'}
                            marks={'Percentage - 72.48%'}
                            showBorder={true}
                     />

              </div>
            
              <div className={style.rowContainer}>
                     <EducationItemContainer
                            qualification={'Ⅻ'}
                            institute={'St. Michael’s Sr. Sec School | 2015'}
                            marks={'Percentage - 84.00%'}
                     />
                     <EducationItemContainer
                            qualification={'Ⅹ'}
                            institute={'St. Michael’s Sr. Sec School | 2013'}
                            marks={'CGPA - 8.60 / 10.0'}
                     />
              </div>
       </>

}

export default EducationQualificationComponent