import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import Infographic from "../common/components/Infographic/Infographic";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'} description={'text description' }/>
                    <Skill title={'JS'} description={'text description text description text description text description text description text description'}/>
                    <Skill title={'CSS'} description={'text description'}/>
                </div>

                {/*<div className={style.infographic}>*/}
                {/*    <h4>Infographic</h4>*/}
                {/*    <Infographic/>*/}
                {/*    <Infographic/>*/}
                {/*    <Infographic/>*/}

                {/*</div>*/}

            </div>
        </div>
    )
}

export default Skills;