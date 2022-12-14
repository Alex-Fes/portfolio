import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/image/todolist.jpg"
import socialImage from "./../assets/image/socialNetwork.jpg"



export type styleObjType = {
    backgroundImage: string
    title: string
    description: string
}

function Projects() {
    const socialNetwork: styleObjType = {
        backgroundImage: `url(${socialImage})`,
        title: 'Social Network',
        description: 'text description text description text description text description text description'

    };
    const todolist: styleObjType = {
        backgroundImage: `url(${todoImage})`,
        title: 'Todolist',
        description: 'Sed ornare tellus a odio bibendum, at tristique sapien malesuada. ' +
            'Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra,' +
            ' per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, ' +
            'commodo eget orci. Proin vel hendrerit ex.'
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <Title text={'Projects'}/>

                <div className={style.projects}>
                    <Project style={socialNetwork}/>
                    <Project style={todolist}/>

                </div>
            </div>
        </div>
    )
}

export default Projects;