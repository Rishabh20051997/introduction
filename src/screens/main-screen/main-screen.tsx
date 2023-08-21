import FooterComponent from 'screens/main-screen/components/footer-component';
import MainContainerComponent from 'screens/main-screen/components/main-container-component';
import NavBarComponent from 'screens/main-screen/components/nav-bar-component';
import './main-screen.scss';
import SliderDrawerComponent from 'components/slider-drawer-component';
import AppContextProvider from 'store/context-provider';



function App() {
  return (
    <div className="App">
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <AppContextProvider>
        <SliderDrawerComponent />
        <NavBarComponent />
        <MainContainerComponent />
        <FooterComponent />
      </AppContextProvider>
    </div>
  );
}

export default App;
