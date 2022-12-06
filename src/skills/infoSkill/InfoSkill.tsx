import React from 'react';
import style from "./InfoSkill.module.scss";
import {skillObjType} from "../Skills";


type InfoSkillPropsType = {
    title: string
    style: skillObjType

}



export const InfoSkill = (props: InfoSkillPropsType) => {
    return(
        <div className={style.infographic}>

            <div className={style.skillBar}>

                <div  className={style.progressItem}>
                    <div className={style.itemIn}>

                        <div className={style.description}>

                           <p>
                               <img src={props.style.backgroundImage}/>
                               {props.style.description}
                           </p>

                        </div>

                        <h3>{props.title}</h3>

                        <div style={{width: `${props.style.width}%`}} className={style.percent}>
                            <span>{`${props.style.width} %`}</span>
                        </div>
                    </div>
                    <div className={style.bgWrap}>
                        <div  className={style.progressBg} style={{width: `${props.style.width}%`}}>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}