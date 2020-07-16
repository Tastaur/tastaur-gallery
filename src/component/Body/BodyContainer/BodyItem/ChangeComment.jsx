import React, {useState} from 'react'
import s from './BodyItem.module.css'

const ChangeComment = (props) => {
  const [comment, setComment] = useState(props.comment)
  const changeComment = (e) => {
    let text = e.target.value
    setComment(text)
  }
  const saveComment = () => {
    props.editComment(props.id, comment)
    props.setEditMode(false)
  }
  return <div>
    <textarea className={s.texarea} value={comment} onChange={changeComment} onBlur={saveComment}/>
  </div>
}
export default ChangeComment
