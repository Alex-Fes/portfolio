import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
               <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={'text description text description text description text description text description'}/>
                    <Project title={'Todolist'} description={'Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex.'}/>

                </div>
            </div>
        </div>
    )
}

export default Projects;