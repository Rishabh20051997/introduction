const PersonalInfoEntity = () => {
    return {
        userName: 'Rishabh Sharma',
        career: {
            careerDesignation: 'Software Engineer',
            careerStartDate: new Date('05/17/2019').toISOString(),
            language: 'React Native'
        },
        mobile : {
            number: '9711138285',
            isoCode: '91'
        },
        emailId: 'kaushikrishabh2005@gmail.com',
        address: '396/1 Bhim Garh Kheri, Gurgaon, India -122001',
        socialAccount: {
            linkedIn: {
                url: 'https://www.linkedin.com/in/rishabh-sharma-20051997',
                userName: 'rishabh-sharma-20051997'
            },
            githubUrl : {
                url: 'https://github.com/Rishabh20051997/',
                userName: 'Rishabh20051997'
            }
        },
        resumeUrl: 'https://drive.google.com/file/d/13MogRMwTCBI_-G2tZ3PVAgfBmX3F7yS9/view?usp=sharing'
    }
}

export default PersonalInfoEntity