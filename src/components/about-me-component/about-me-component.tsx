import {fa } from './about-me-style.module.scss'
import { logo } from "../../resources"

const AboutMeComponent = () => {
    return <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div >
        <header>Hi I am Rishabh Sharma</header>
        <div>I am a Software Engineer with experience of 4 years in React Native</div>
        <div>
        <a href="#" className={''}></a>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-github"></a>
        <a href="#" className="fa fa-google"></a>
        </div>
        <button>Download CV</button>
        </div>

        <img src={logo} height={200} width={200} alt="My Image" />
    </section>

}

export default AboutMeComponent