import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import SocialMedia from "./socialMedia/SocialMedia";



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Aleksei Fesenko</h2>
                <div className={style.footer}>
                   <SocialMedia/>
                   <SocialMedia/>
                   <SocialMedia/>
                   <SocialMedia/>
                </div>
                <h6 className={style.copyright}>© 2022 All rights reserved</h6>
            </div>
        </div>
    )
}

export default Footer;