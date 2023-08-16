import AboutMeComponent from '../../components/about-me-component/about-me-component';
import ContactUsComponent from '../../components/contact-us-component/contact-us-component';
import EducationQualificationComponent from '../../components/education-qualification-component/education-qualification-component';
import ExperienceComponent from '../../components/experience-component/experience-component';
import FooterComponent from '../../components/footer-component/footer-component';
import NavBarComponent from '../../components/nav-bar-component/nav-bar-component';
import SkillsComponent from '../../components/skills-component/skills-component';
import './main-screen.scss';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* <NavBarComponent/> */}
      <AboutMeComponent/>
      {/* <SkillsComponent/>
      <ExperienceComponent/>
      <EducationQualificationComponent/>
      <ContactUsComponent/>
      <FooterComponent/> */}
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
