import React, { Component } from 'react'
import Banner from '../../components/homepage/Banner'
import AllBooks from '../../components/homepage/AllBooks'


export class Homepage extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <AllBooks></AllBooks>
      </div>
    )
  }
}

export default Homepage