import React from 'react'
import BodyContainer from './BodyContainer'
import {connect} from 'react-redux'
import {deletePost, showImage} from '../../../store/galeryReducer'


let mapStateToProps = (state) => {
  return {
    gallery: state.gallery,
  }
}

export default connect(mapStateToProps, {showImage, deletePost})(BodyContainer)
