import React from 'react'
import CenterHeader from './header/index'
import CenterContainer from './container/index'
import HomeFooter from '../home/footer/index'

export default class CenterPage extends React.Component {
  render() {
    return (
      <div>
        <CenterHeader />
        <CenterContainer />
        <HomeFooter />
      </div>

    )
  }
}