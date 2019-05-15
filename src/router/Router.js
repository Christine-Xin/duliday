import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/home/index'
import MyJobs from '../pages/myJobs/index'
import CenterPage from '../pages/center/index'
import DetailPages from '../pages/details/index'





let routes = [
  {
    path: "/home/detail/:id",
    component: DetailPages
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/myjobs",
    component: MyJobs
  },
  {
    path: "/center",
    component: CenterPage
  },

]
export default class RootRouter extends React.Component {
  render() {
    return (
      <div style={{ fontSize: '.14rem' }}>

        <Switch>
          {
            routes.map((value, index) => {
              return <Route key={index} {...value} />

            })
          }
        </Switch>

      </div>
    )
  }
}