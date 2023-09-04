import FooterComponent from 'layout/main-layout/components/footer-component';
import MainContainerComponent from 'layout/main-layout/components/main-container-component';
import NavBarComponent from 'layout/main-layout/components/nav-bar-component';
import './main-layout.scss';
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
