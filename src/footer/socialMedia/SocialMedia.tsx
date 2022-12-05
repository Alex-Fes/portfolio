import React from 'react';
import style from './SocialMedia.module.scss'
import {styleObjType} from "../../propjects/Projects";


export type SocialMediaType = {
    style: styleObjType
    url: string
}

function SocialMedia(props: SocialMediaType) {
    return (
        <div className={style.social}>
            <a href={props.url}>
            <div  style={props.style} className={style.icon}>
            </div>
            </a>
        </div>
    )
}

export default SocialMedia;