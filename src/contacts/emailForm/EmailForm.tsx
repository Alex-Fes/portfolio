import React, { useState } from 'react'

import { useFormik } from 'formik'

import style from './EmailForm.module.scss'

const validate = (values: FeedbackValuesType) => {
  const errors: FormikErrorType = {}

  if (values.name.length < 3) {
    errors.name = 'Too short name'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (values.message.length < 5) {
    errors.message = 'Too short message'
  }
  // if (errors) {
  //   setFeedback('error')
  //   setTimeout(() => {
  //     setFeedback('idle')
  //   }, 2000)
  // }

  return errors
}

export const EmailForm = () => {
  const [feedback, setFeedback] = useState<FeedbackType>('idle')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values: FeedbackValuesType) => {
      console.log(values)

      setFeedback('succeeded')
      setTimeout(() => {
        setFeedback('idle')
      }, 2000)
    },
  })

  return (
    <form className={style.emailForm} onSubmit={formik.handleSubmit}>
      <div className={style.itemsWrap}>
        <div className={style.items}>
          <div className={style.feedback}>
            <span className={feedback === 'error' ? style.error : style.errorHide}>
              Please Fill Required Fields!
            </span>

            <span className={feedback === 'succeeded' ? style.success : style.successHide}>
              Your message has been received, we will contact you soon.
            </span>
          </div>
          <div className={style.itemHalf}>
            <div className={style.inputWrapper}>
              <input
                autoComplete="off"
                id={'name'}
                type="text"
                placeholder="Name *"
                {...formik.getFieldProps('name')}
              />
              {/*<TextField*/}
              {/*  fullWidth*/}
              {/*  // className={style.input}*/}
              {/*  id="name"*/}
              {/*  name="name"*/}
              {/*  label={formik.errors.name && formik.touched.name ? formik.errors.name : 'Name *'}*/}
              {/*  variant="outlined"*/}
              {/*  value={formik.values.name}*/}
              {/*  onChange={formik.handleChange}*/}
              {/*  error={formik.touched.name && !!formik.errors.name}*/}
              {/*  InputProps={{*/}
              {/*    className: style.input,*/}
              {/*    style: {*/}
              {/*      color: 'red',*/}
              {/*    },*/}
              {/*  }}*/}
              {/*  InputLabelProps={{*/}
              {/*    // style: { color: '#d8ccbe82' },*/}
              {/*    className: style.input,*/}
              {/*  }}*/}
              {/*/>*/}
            </div>
            <div className={style.inputWrapper}>
              <input
                autoComplete="off"
                id={'email'}
                type="text"
                placeholder="Email *"
                {...formik.getFieldProps('email')}
              />
            </div>
          </div>
          <div className={style.item}>
            <textarea id={'message'} placeholder="Message" {...formik.getFieldProps('message')} />
          </div>
          <div className={style.sendMessage}>
            <button type={'submit'}>Send message</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export type FeedbackValuesType = {
  name: string
  email: string
  message: string
}
export type FormikErrorType = {
  name?: string
  email?: string
  message?: string
}
type FeedbackType = 'idle' | 'error' | 'succeeded'
