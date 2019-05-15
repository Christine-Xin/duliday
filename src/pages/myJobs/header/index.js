import React from 'react'
import { Icon } from 'antd'


export default class MyJobsHeader extends React.Component {

  render() {
    return (
      <div style={{ fontSize: 18, textAlign: 'center', margin: '30px 0' }}>
        <Icon type='crown' style={{ color: ' #B8860B ' }} />
        商品列表中心
      </div>
    )
  }
}