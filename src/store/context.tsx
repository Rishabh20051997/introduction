import { createContext, useContext, useState } from 'react';
import SliderModalEntity from './entity/slider-modal-entity';

export const AppContext = createContext({
    sliderVisible: false,
    showSlider: () => {},
    hideSlider: () => {}
});

const AppContextProvider = ({
    children
}: {
    children: ReactNode | ReactNode[] 
}) => {

    const [sliderVisible, updateSliderVisibility] = useState(false)

    const hideSlider = () => {
        updateSliderVisibility(false)
    }

    const showSlider = () => {
        updateSliderVisibility(true)
    }
    
    return <AppContext.Provider value={{ 
        sliderVisible,
        hideSlider,
        showSlider

    }}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider

export const useStore = () => {
    const contextConsumer = useContext(AppContext);
    const { showSlider , hideSlider, sliderVisible } = contextConsumer
    

    return { showSlider , hideSlider, sliderVisible }
}

