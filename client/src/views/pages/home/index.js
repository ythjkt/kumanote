import React, { Component } from 'react'
import { Overview, Features, Join, Footer } from './view'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Overview />
        <Features />
        <Join />
        <Footer />
      </div>
    )
  }
}
