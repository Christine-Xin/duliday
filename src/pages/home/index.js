import React from 'react'
import HomeHeader from './header/index'
import HomeContainer from './container/index'
import HomeFooter from './footer/index'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeContainer {...this.props} />
        <HomeFooter />
      </div>
    )
  }
}