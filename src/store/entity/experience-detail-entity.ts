const ExperienceDetailEntity = () => {
    const experienceData = [{
        startDate: new Date('12/21/2022').toISOString(),
        endDate: '',
        companyName: 'Learning Closet Pvt. Ltd (Exampur)',
        designation: 'Senior Software Engineer',
        projectName: 'Worked on - Exampur App',
        technologyUsed: 'Technology Used - React Native, Typescript, Redux, MVC pattern, Flux, Live Classes, Firebase',
    }, {
        startDate: new Date('11/1/2022').toISOString(),
        endDate: new Date('12/20/2022').toISOString(),
        companyName: 'UpGrad Pvt. Ltd (Exampur)',
        designation: 'Senior Software Engineer',
        projectName: 'Worked on - Exampur App',
        technologyUsed: 'Technology Used - React Native, Typescript, Redux, MVC pattern, Flux, Live Classes',
    }, {
        startDate: new Date('05/17/2019').toISOString(),
        endDate: new Date('10/31/2022').toISOString(),
        companyName: 'Edfora Infotech Pvt. Ltd',
        designation: 'Software Engineer',
        projectName: 'Worked on - Edfora student & Edfora Teacher App',
        technologyUsed: 'Technology Used - React Native, Typescript, Mobx, Flux, Push Notification, Realm Database',
    }]

    return {
        experienceData
    }
}

export default ExperienceDetailEntity