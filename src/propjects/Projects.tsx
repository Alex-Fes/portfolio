import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Project 1'} description={'text description text description text description text description text description'}/>
                    <Project title={'Project 2'} description={'text description'}/>
                    <Project title={'Project 3'} description={'text description'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;