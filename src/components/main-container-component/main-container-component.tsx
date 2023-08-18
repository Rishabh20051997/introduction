import { NAV_LINKS_LIST, NAV_LINK_KEY } from "../../constant/constant"
import AboutMeComponent from "../about-me-component/about-me-component"
import ContactUsComponent from "../contact-us-component/contact-us-component"
import EducationQualificationComponent from "../education-qualification-component/education-qualification-component"
import ExperienceComponent from "../experience-component/experience-component"
import ProjectComponent from "../projects-component/project-component"
import SkillsComponent from "../skills-component/skills-component"

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
                return <Component
                    sectionId={item.scrollId}
                    index={index}
                />
            }
            return <></>

        })}
    </>
}

export default MainContainerComponent