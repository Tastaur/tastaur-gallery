import React from 'react'
import {Redirect} from 'react-router-dom'
import s from './item.module.css'
import imgDefault from '../../assets/unnamed.png'

const Item = (props) => {
  let closeImg = (e) => {
    if (e.target.tagName != 'IMG') {
      document.location.href = '/#/'
    }
  }

  return <div onClick={closeImg}>
    {props.gallery.showImage ?
        <div className={s.container}>
          <img src={props.gallery.showImage[0].src} className={s.img} alt=''/>
        </div>
        : <Redirect to={`/`}/>
    }
  </div>
}
export default Item
