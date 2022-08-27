import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
            <div className={style.text}>
              <span>Hi everyone!</span>
            <h1>I`m Aleksey Fesenko.</h1>
                <p>It`s my portfolio.</p>
                <p>I will be a front-end developer.</p>
            </div>
            <div className={style.photo}>photo</div>
            </div>
        </div>
    )
}

export default Main;