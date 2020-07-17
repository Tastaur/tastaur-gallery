import React from 'react'
import {Redirect} from 'react-router-dom'
import s from './item.module.css'

const Item = (props) => {
  let closeImg = (e) => {
    if (e.target.tagName !== 'IMG') {
      props.history.goBack()
    }
  }
  return <div onClick={closeImg} className={s.container}>
    {props.gallery.showImage ? <img src={props.gallery.showImage[0].src} className={s.img} alt=''/> : <Redirect to={`/`}/>}
  </div>
}
export default Item
