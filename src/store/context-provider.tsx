import { createContext } from 'react';
import SliderModalEntity from './entity/slider-modal-entity';
import PersonalInfoEntity from './entity/personal-info-entity';
import SkillSetInfoEntity from './entity/skill-set-entity';
import ExperienceDetailEntity from './entity/experience-detail-entity';
import EducationDetailEntity from './entity/education-detail-entity';

type ISliderModalEntity = ReturnType<typeof SliderModalEntity> 
type IPersonalInfoEntity = ReturnType<typeof PersonalInfoEntity>
type ISkillSetInfoEntity = ReturnType<typeof SkillSetInfoEntity>
type IExperienceDetailEntity = ReturnType<typeof ExperienceDetailEntity>
type IEducationDetailEntity = ReturnType<typeof EducationDetailEntity>

interface IAppContext{
    sliderEntity: ISliderModalEntity
    personalInfoEntity: IPersonalInfoEntity
    skillSetInfoEntity: ISkillSetInfoEntity
    experienceDetailEntity: IExperienceDetailEntity
    educationDetailEntity : IEducationDetailEntity
}


export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({
    children
}: {
    children: ReactNode | ReactNode[] 
}) => {

    const sliderEntity = SliderModalEntity()
    const personalInfoEntity = PersonalInfoEntity()
    const skillSetInfoEntity = SkillSetInfoEntity()
    const experienceDetailEntity = ExperienceDetailEntity()
    const educationDetailEntity = EducationDetailEntity()
    
    return <AppContext.Provider value={{ 
        sliderEntity: sliderEntity,
        personalInfoEntity: personalInfoEntity,
        skillSetInfoEntity: skillSetInfoEntity,
        experienceDetailEntity: experienceDetailEntity,
        educationDetailEntity: educationDetailEntity
    }}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider

