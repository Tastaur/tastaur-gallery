import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store, {persistor} from './store/reduxStore'
import {HashRouter, Route} from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Body from './component/Body/Body'
import UploadForm from './component/UploadForm/UploadForm'
import ItemContainer from './component/Item/ItemContainer'
import { PersistGate } from 'redux-persist/integration/react';


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
      <PersistGate loading={null} persistor={persistor}>
      <App/>
      </PersistGate>
    </Provider>
  </HashRouter>
}

export default GalleryApp
