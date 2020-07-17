import React from 'react'
import s from './UploadForm.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input, Textarea} from '../../assets/Forms/FormsControl'
//form
import {minLengthCreator, required} from '../../assets/validator'

const minLength2 = minLengthCreator(2)

const Form = ({handleSubmit, closeForm}) => {
  return <form onSubmit={handleSubmit} className={s.form}>
    <div className={s.item}>
      <label className={s.label}> Enter url picture</label>
      <Field className={s.input}
             component={Input}
             type={`text`}
             validate={required}
             name={'src'}
             placeholder={`Src`}
      />
    </div>
    <div className={s.item}>
      <label className={s.label}> Enter your comment</label>
      <Field component={Textarea}
             validate={[required, minLength2]}
             name={'comment'}
             placeholder={`Comment`}
             className={s.textarea}
             type={`text`}
      />
    </div>
    <div className={s.buttonContainer}>
    <button type='submit' className={s.button}>Upload</button>
    <button onClick={closeForm} className={s.button}> Close</button>
    </div>
  </form>

}
const UploadReduxForm = reduxForm({
  form: 'formUpload',
})(Form)
// add redux-form
export default UploadReduxForm
