import React from 'react';
import style from './SocialMedia.module.scss'
import {styleSocialObjType} from "../Footer";


export type SocialMediaType = {
    data: styleSocialObjType
    // url: string
}

function SocialMedia(props: SocialMediaType) {
    return (
        <div className={style.social}>
            <a href={props.data.url}>
                <div className={style.icon}>
                    <img src={props.data.backgroundImage}
                        // style={{backgroundImage: props.data.backgroundImage}}
                        alt=""/>
                </div>
            </a>
        </div>
    )
}

export default SocialMedia;