import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './store/reduxStore'
import {HashRouter, Route} from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Body from './component/Body/Body'
import UploadForm from './component/UploadForm/UploadForm'
import ItemContainer from './component/Item/ItemContainer'

const App = (props) => {
  return (
      <div className="App">
        <div className='wrapper'>
          <Header/>
          <Body/>
          <UploadForm/>
          <Footer/>
          <Route path={`/id:id?`} render={() => {
            return <ItemContainer/>
          }}
          />
        </div>
      </div>
  )
}

const GalleryApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>
}

export default GalleryApp
