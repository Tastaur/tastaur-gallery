import React, {useState} from 'react'
import s from './BodyItem.module.css'
import ChangeCommentContainer from './ChangeCommentContainer'
import {NavLink} from 'react-router-dom'
import deleteButton from '../../../../assets/garbage.png'

const BodyItem = (props) => {
  const [editMode, setEditMode] = useState(false)
  const setImage = () => {
    props.showImage(props.id)
  }
  const deleteImage = () =>{
    props.deletePost(props.id)
  }
  return <div className={s.container}>

    <NavLink to={`/id${props.id}`}>
      <img onClick={setImage} src={props.src} className={s.img} alt='
if you see this message, then something went wrong'
      /></NavLink>

    {editMode ? <ChangeCommentContainer comment={props.comment} setEditMode={setEditMode} id={props.id}/>
        : <p className={s.title} onDoubleClick={() => {
          setEditMode(true)
        }}
        >{props.comment}</p>}
        <div className={s.buttonContainer}>
          <img className={s.button} src={deleteButton} onClick={deleteImage}/>
        </div>
  </div>
}

export default BodyItem
