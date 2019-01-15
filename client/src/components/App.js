import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import Componenets
import Navbar from '../containers/Navbar'
import Landing from './Landing'
// import NoteList from '../containers/NoteList'
// import AddNote from '../containers/AddNote'
// import EditNote from '../containers/EditNote'
import Register from '../components/Register'
import Login from '../components/Login'

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      {/* <AddNote>Create Note</AddNote>
      <NoteList />
      <EditNote /> */}
    </div>
  </Router>
)

export default App
