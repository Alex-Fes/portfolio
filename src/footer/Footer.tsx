import React from 'react';
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import SocialMedia from "./socialMedia/SocialMedia";
import fbImg from "../assets/image/facebook-social.svg";
import twiImg from "../assets/image/twitter-social.svg";
import gitImg from "../assets/image/github2.svg";
import linkedinImg from "../assets/image/linkedin-social.svg";

export type styleSocialObjType = {
    backgroundImage: string
}

function Footer() {
    const facebook: styleSocialObjType = {
        backgroundImage: `url(${fbImg})`
    };
    const twitter: styleSocialObjType = {
        backgroundImage: `url(${twiImg})`
    };
    const gitHub: styleSocialObjType = {
        backgroundImage: `url(${gitImg})`
    };
    const linkedin: styleSocialObjType = {
        backgroundImage: `url(${linkedinImg})`
    };

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Aleksei Fesenko</h2>
                <div className={style.footer}>
                   <SocialMedia style={facebook} url={`https://www.facebook.com/aleksei.fesenko.75/`}/>
                   <SocialMedia style={twitter} url={'https://twitter.com/Fesenich1'}/>
                   <SocialMedia style={gitHub} url={'https://github.com/Alex-Fes'}/>
                   <SocialMedia style={linkedin} url={'https://www.linkedin.com/in/oleksii-fes/'}/>
                </div>
                <h6>© 2022 All rights reserved</h6>
            </div>
        </div>
    )
}

export default Footer;