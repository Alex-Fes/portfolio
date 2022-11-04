import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";



function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.formArea}>
                    <input  type="text"/>
                    <input  type="text"/>
                    <textarea />
                </form>
                <button type="submit" className={style.button}>Send</button>
            </div>
        </div>
    )
}

export default Contacts;