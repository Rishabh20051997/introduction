export enum NAV_LINK_ID {
    ABOUT = 'about-section',
    SKILLS = 'skills-section',
    EXPERIENCE = 'experience-section',
    PROJECTS = 'project-section',
    EDUCATION = 'education-section',
    CONTACT = 'contact-us-section'
}

export enum NAV_LINK_KEY {
    ABOUT = 'about',
    SKILLS = 'skills',
    EXPERIENCE = 'experience',
    PROJECTS = 'project',
    EDUCATION = 'education',
    CONTACT = 'contact-us'
}

export const NAV_LINKS_LIST = [{
    key: NAV_LINK_KEY.ABOUT,
    displayValue: 'About me',
    scrollId: NAV_LINK_ID.ABOUT
}, {
    key: NAV_LINK_KEY.SKILLS,
    displayValue: 'Skills',
    scrollId: NAV_LINK_ID.SKILLS
}, {
    key: NAV_LINK_KEY.EXPERIENCE,
    displayValue: 'Experience',
    scrollId: NAV_LINK_ID.EXPERIENCE
}, 
// {
//     key: NAV_LINK_KEY.PROJECTS,
//     displayValue: 'Projects',
//     scrollId: NAV_LINK_ID.PROJECTS
// }, 
{
    key: NAV_LINK_KEY.EDUCATION,
    displayValue: 'Education Qualification',
    scrollId: NAV_LINK_ID.EDUCATION
}, {
    key: NAV_LINK_KEY.CONTACT,
    displayValue: 'Contact',
    scrollId: NAV_LINK_ID.CONTACT
}]