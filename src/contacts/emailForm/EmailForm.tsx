import React from 'react'

import { TextareaAutosize, TextField } from '@mui/material'

import s from './EmailForm.module.scss'

export const EmailForm = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.input}>
        <TextField className={s.inputStyle} id="standard-basic" label="name" />
        <TextField className={s.inputStyle} id="standard-basic" label="email" variant="standard" />
      </div>
      <div className={s.textArea}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Text your message..."
          style={{ width: 400 }}
        />
      </div>
      <div className={s.button}>send</div>
    </div>
  )
}
