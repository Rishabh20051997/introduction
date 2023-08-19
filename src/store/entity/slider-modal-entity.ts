import { useState } from "react"

const SliderModalEntity = () => {
    const [sliderVisible, updateSliderVisibility] = useState(true)

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

const sliderEntity = SliderModalEntity()

export default sliderEntity