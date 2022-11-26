import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'} description={'text description'}/>
                    <Skill title={'JS'}
                           description={'text description text description text description text description text description text description'}/>
                    <Skill title={'CSS'} description={'text description'}/>
                </div>


                <div className={style.infographic}>
                    <h4>Infographic</h4>
                    <div className={style.skillBar}>
                        skill bar


                        <div className={style.progressItem}>
                            <div className={style.itemIn}>
                                <h3>React</h3>
                                <span > "80%"</span>
                            </div>
                        </div>
                        <div className={style.bgWrap}>
                            <div className={style.progressBg}>

                            </div>
                        </div>






                    </div>


                </div>

            </div>
        </div>
    )
}

export default Skills;