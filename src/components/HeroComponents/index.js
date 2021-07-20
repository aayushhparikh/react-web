import React from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    BgHero,
    HeroContent,
    HeroH1,
    HeroP } from './HeroElements'

const HeroSection = () => {
    return (
        <div>
            <HeroContainer id="home">
                <HeroBg>
                    <BgHero>
                    </BgHero>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Hey!</HeroH1>
                    <HeroP>Welcome to my website</HeroP>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
