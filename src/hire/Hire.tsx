import styleContainer from "../common/styles/Container.module.scss";
import style from './Hire.module.scss'
import React from 'react';

function Hire () {
    return(<>
        <div className={style.hireBlock}>
    <div className={`${styleContainer.container} ${style.hireContainer}`}>
        <h2 className={style.title}>I am available for Freelance</h2>
        <button className={style.hireBtn}><a href="" >Hire me</a> </button>

    </div></div>
        </>
    )
}
export default Hire;