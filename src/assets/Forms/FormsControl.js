import React from 'react'
import s from './FormsControl.module.css'


const Element = Element => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <Element {...input} {...props} />
        <div className={s.errorContainer}>
          {hasError && <span> {meta.error} </span>}
        </div>
      </div>
  )
}
export const Textarea = Element('textarea')

export const Input = Element('input')


