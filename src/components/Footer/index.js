import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {FooterContainer,
        FooterWrap,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcons,
        SocialIconLink,
        WebsiteRights} from './FooterElements'

const Footer = () => {
    return (
        <div>
            <FooterContainer>
               <FooterWrap>
                   <SocialMedia>
                       <SocialMediaWrap>
                           <WebsiteRights>Aayush Parikh © {new Date().getFullYear()}</WebsiteRights>
                           <SocialIcons>
                               <SocialIconLink href="//www.instagram.com/_aayushp/" target="_blank" aria-label="Instagram">
                                   <FaInstagram />
                               </SocialIconLink>
                               <SocialIconLink href="//github.com/aayushhparikh" target="_blank" aria-label="Github">
                                   <FaGithub />
                               </SocialIconLink>
                               <SocialIconLink href="//www.linkedin.com/in/aayush-p/" target="_blank" aria-label="Linkedin">
                                   <FaLinkedin />
                               </SocialIconLink>
                           </SocialIcons>
                       </SocialMediaWrap>
                   </SocialMedia>
               </FooterWrap>
            </FooterContainer> 
        </div>
    )
}

export default Footer
