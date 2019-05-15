import React from 'react'
import MyJobsHeader from './header/index'
import HomeFooter from '../home/footer/index'
import MyJobsContainer from './container/index'

export default class MyJobs extends React.Component {
  render() {
    return (
      <div>
        <MyJobsHeader />
        <MyJobsContainer />
        <HomeFooter />
      </div>
    )
  }
}