import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    BgHero,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    }

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
                    <HeroBtnWrapper>
                        <Button to='about' onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary="true"
                        dark="true"
                        >
                            More about me {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
