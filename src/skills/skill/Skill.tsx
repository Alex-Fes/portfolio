import React from 'react';
import style from './Skill.module.scss'
import {styleObjType} from "../../propjects/Projects";


type SkillPropsType = {
    title: string
    description: string
    style: styleObjType
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description} </span>
        </div>
    )
}

export default Skill;