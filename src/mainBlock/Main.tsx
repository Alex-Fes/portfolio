import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import myfoto from "../assets/image/myFoto1.jpg";
import {styleObjType} from "../propjects/Projects";



function Main() {
    const myFoto: styleObjType = {
        backgroundImage: `url(${myfoto})`
    }
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
            <div className={style.text}>
              <span>Hi everyone!</span>
            <h1>I'm Aleksey Fesenko.</h1>
                <p>It`s my portfolio.</p>
                <p>I will be a front-end developer.</p>
            </div>
            <div style={myFoto} className={style.photo}></div>
            </div>
        </div>
    )
}

export default Main;