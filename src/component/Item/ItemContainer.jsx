import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import Item from './Item'

let mapStateToProps = (state) => ({
  gallery: state.gallery,
})


export default compose(
    connect(mapStateToProps, {}),
    withRouter,
)(Item)
