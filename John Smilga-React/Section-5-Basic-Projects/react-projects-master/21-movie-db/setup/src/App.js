import React from 'react'
// before react-router-dom6 import { Switch, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    //before react-router-dom6
    // <Switch>
    //   <Route path='/' exact>
    //     <Home />
    //   </Route>
    //   <Route path='/movies/:id' children={<Movie />} />
    // </Switch>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/:id' element={<Movie />} />
      
    </Routes>
  )
}

export default App
