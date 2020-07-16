import React from 'react'
import s from './Header.module.css'

const Header = (props) => {
  return <div className={s.header}>
    <h2 className={s.title}> Tastaur's Gallery</h2>
  </div>
}

export default Header
