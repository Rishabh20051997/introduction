import { createContext } from 'react';
import SliderModalEntity from './entity/slider-modal-entity';

export const AppContext = createContext({
    sliderEntity: SliderModalEntity
});

const AppContextProvider = ({
    children
}: {
    children: ReactNode | ReactNode[] 
}) => {
    
    return <AppContext.Provider value={{ 
        sliderEntity: SliderModalEntity
    }}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider

