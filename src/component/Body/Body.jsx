import React from 'react'
import s from './Body.module.css'
import BodyContainerWrap from './BodyContainer/BodyContainerWrap'

const Body = (props) => {
  return <div className={s.body}>
    <h3 className={s.title}> App with perfect image</h3>
    <BodyContainerWrap/>
  </div>
}

export default Body
