import React, {useState} from 'react'
import s from './UploadForm.module.css'
import {addPost} from '../../store/galeryReducer'
import {connect} from 'react-redux'
import UploadReduxForm from './Form'
import {reset} from 'redux-form'


//connect to store
const UploadForm = (props) => {
  const addPhoto = (formData, dispatch) => {
    props.addPost(formData.src, formData.comment)
    dispatch(reset('formUpload'))
  }
  const [showForm, setShowForm] = useState(false)
  return <div className={s.uploadContainer}>
    <h2 className={s.title}>You can download new picture</h2>
    {showForm ?
        <UploadReduxForm onSubmit={addPhoto}/>
        : <button className={s.button} onClick={() => setShowForm(true)}>Download new picture</button>}
  </div>
}
const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, {addPost})(UploadForm)
