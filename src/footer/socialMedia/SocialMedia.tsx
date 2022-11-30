import React from 'react';
import style from './SocialMedia.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'



function SocialMedia() {
    return (
        <div className={style.social}>
            <div className={style.icon}>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
        </div>
    )
}

export default SocialMedia;