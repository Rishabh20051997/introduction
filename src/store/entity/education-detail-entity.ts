import { convertSingleToTwoDimensionalArray } from "utils/app-utils"

const EducationDetailEntity = () => {
    const educationData = [{
        qualification: 'M.Tech',
        stream: 'Computer Science & Engineering',
        institute: 'Dronacharya College of Engineering | 2022',
        marks: 'Percentage - 78.62%',
    },
    {
        qualification: 'B.Tech',
        stream: 'Computer Science & Engineering',
        institute: 'Dronacharya College of Engineering | 2019',
        marks: 'Percentage - 72.48%',
    },
    {
        qualification: 'Ⅻ',
        stream: '',
        institute: 'St. Michael’s Sr. Sec School | 2015',
        marks: 'Percentage - 84.00%',
    }, {
        qualification: 'Ⅹ',
        stream: '',
        institute: 'St. Michael’s Sr. Sec School | 2015',
        marks: 'CGPA - 8.60 / 10.0', 
    }]

    const education2DData = convertSingleToTwoDimensionalArray(educationData)  as (typeof educationData[0])[][]

    return {
        educationData,
        education2DData
    }
}

export default EducationDetailEntity
