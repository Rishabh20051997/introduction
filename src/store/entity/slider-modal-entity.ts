import { useState } from "react"

const SliderModalEntity = () => {
    const [sliderVisible, updateSliderVisibility] = useState(false)

    const hideSlider = () => {
        updateSliderVisibility(false)
    }

    const showSlider = () => {
        updateSliderVisibility(true)
    }

    return {
        sliderVisible,
        hideSlider,
        showSlider
    }
}



export default SliderModalEntity