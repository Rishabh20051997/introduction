import { NAV_LINKS_LIST, NAV_LINK_KEY } from "constant/constant"
import AboutMeComponent from "components/about-me-component/about-me-component"
import ContactUsComponent from "components/contact-us-component/contact-us-component"
import EducationQualificationComponent from "components/education-qualification-component"
import ExperienceComponent from "components/experience-component/experience-component"
import ProjectComponent from "components/projects-component/project-component"
import SectionComponent from "components/section-component"
import SkillsComponent from "components/skills-component/skills-component"

const HOME_COMPONENT_MAP = new Map([
    [NAV_LINK_KEY.ABOUT, AboutMeComponent],
    [NAV_LINK_KEY.SKILLS, SkillsComponent],
    [NAV_LINK_KEY.EXPERIENCE, ExperienceComponent],
    [NAV_LINK_KEY.PROJECTS, ProjectComponent],
    [NAV_LINK_KEY.EDUCATION, EducationQualificationComponent],
    [NAV_LINK_KEY.CONTACT, ContactUsComponent]
])

const MainContainerComponent = () => {
    return <>
        {NAV_LINKS_LIST.map((item, index) => {
            const Component = HOME_COMPONENT_MAP.get(item?.key)
            if (Component) {
                return <SectionComponent 
                key={item.key}
                id={item.scrollId}
                index={index}
                >
                    <Component
                />
                </SectionComponent> 
            }
            return <></>

        })}
    </>
}

export default MainContainerComponent