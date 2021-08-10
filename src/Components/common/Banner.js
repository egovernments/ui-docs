import React from 'react'
import Container from './Container'
import "../../App.css"

const Banner = (props) => {
    return (
        <div className="w-full bg-banner_bg flex justify-center items-center h-auto py-14 md:py-0 sm:h-3/4">
            <Container>
            <div className="w-full h-full py-8 flex md:flex-row justify-between items-center sm:flex-col flex-col">
                <div className="w-80">
                    <h2 className="text-white 2xl:text-5xl xl:text-3xl lg:text-xl md:text-lg sm:text-2xl text-4xl  pb-4 font-bold font-sans leading-tight border-b-4 border-border">{props.heading}</h2>
                    <p className="text-white pt-4 font-normal sm:text-xs text-lg md:text-sm font-sans">{props.para}</p>
                </div>
                <div className="banner_img sm:pt-12 pt-12 md:pt-0">
                    <img src={props.Image} alt="banner" />
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Banner