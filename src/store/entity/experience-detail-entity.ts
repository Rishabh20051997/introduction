const ExperienceDetailEntity = () => {
    const experienceData = [{
        startDate: new Date('12/21/2022').toISOString(),
        endDate: '',
        companyName: 'Learning Closet Pvt. Ltd (Exampur)',
        designation: 'Senior Software Engineer',
        projectName: 'Worked on - Exampur App',
        technologyUsed: 'Technology Used - Typescript, React Native, Redux, MVC pattern',
    }, {
        startDate: new Date('11/1/2022').toISOString(),
        endDate: new Date('12/20/2022').toISOString(),
        companyName: 'UpGrad Pvt. Ltd (Exampur)',
        designation: 'Senior Software Engineer',
        projectName: 'worked on - Exampur App',
        technologyUsed: 'Technology Used - Typescript, React Native,Redux, MVC pattern',
    }, {
        startDate: new Date('05/17/2019').toISOString(),
        endDate: new Date('10/31/2022').toISOString(),
        companyName: 'Edfora Infotech Pvt. Ltd',
        designation: 'Software Engineer',
        projectName: 'worked on - Edfora student & Edfora Teacher App',
        technologyUsed: 'Technology Used - Typescript, React Native, Mobx',
    }]

    return {
        experienceData
    }
}

export default ExperienceDetailEntity