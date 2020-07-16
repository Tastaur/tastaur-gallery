import React from 'react'
import {connect} from 'react-redux'
import ChangeComment from './ChangeComment'
import {editComment} from '../../../../store/galeryReducer'

let mapStateToProps = (state) => {
  return {

  }
}

export default  connect(mapStateToProps, { editComment})(ChangeComment)
