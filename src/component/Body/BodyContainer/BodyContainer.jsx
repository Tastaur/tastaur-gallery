import React from 'react'
import s from './BodyContainer.module.css'
import BodyItem from './BodyItem/BodyItem'

const BodyContainer = (props) => {

  let images = props.gallery.image.map(i => <BodyItem deletePost={props.deletePost}
                                                      showImage={props.showImage}
                                                      key={i.id}
                                                      id={i.id}
                                                      comment={i.comment}
                                                      src={i.src}
  />)
  return <div className={s.container}>
    {props.gallery.image.length === 0 ? <h2 className={s.errorMessages}>Oops! No more photo</h2>: images}
  </div>
}

export default BodyContainer
