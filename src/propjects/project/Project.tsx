import React from 'react';
import style from './Project.module.scss'
import {styleObjType} from "../Projects";


type ProjectPropsType = {
    style: styleObjType
}

function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>

                <a style={{backgroundImage: props.style.backgroundImage}}
                   href="" className={style.picture}></a>

            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.style.title}</h3>
                <span className={style.description}>{props.style.description}</span>
            </div>
        </div>
    )
}

export default Project;