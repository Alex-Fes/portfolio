import React from 'react';
import style from './Project.module.css'


type ProjectPropsType = {
    title: string
    description: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.picture}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description} </span>
        </div>
    )
}

export default Project;