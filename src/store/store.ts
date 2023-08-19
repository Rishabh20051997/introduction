import { useContext } from "react";
import { AppContext } from "./context-provider";

export const useStore = () => {
    const contextConsumer = useContext(AppContext);
    

    return {
        slider: contextConsumer.sliderEntity
    }
}