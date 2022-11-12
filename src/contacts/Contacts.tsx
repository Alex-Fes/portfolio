import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";



function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <div className={style.secondContactsContainer}>
                    <div className={style.myContacts}> My contacts</div>
                    <div className={style.sendMeMessage}>
                        <form className={style.formArea}>
                            <input  type="text" value={'Your name'}/>
                            <input  type="text" value={'Your email'}/>
                            <textarea value={"Your message"}/>

                        </form>
                        <button type="submit" className={style.button}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contacts;