import EducationItemContainer from './components/education-item-container'
import Text from 'widgets/ui-text'
import { FONT_TYPE, colors } from 'themes'
import style from './education-qualification-component-style.module.scss'
import { useStore } from 'store/store'

const EducationQualificationComponent = () => {

       const { education2DData } = useStore().educationDetail
       return <>
              <header className={style.sectionHeader}></header>
              <Text
                     text={'Education Qualification'}
                     color={colors.main.onPrimary}
                     fontType={FONT_TYPE.HEADLINE_SMALL}
                     className={style.sectionHeader}
              />
              {education2DData.map((educationArray, index) => {
                     return <div className={style.rowContainer}>
                            {educationArray.map(item => {
                                   return <EducationItemContainer
                                          qualification={item.qualification}
                                          stream={item.stream}
                                          institute={item.institute}
                                          marks={item.marks}
                                          showBorder={!(education2DData.length - 1 === index)}
                                   />
                            })}
                     </div>
              })}
       </>

}

export default EducationQualificationComponent