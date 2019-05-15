import React from 'react'
import { Icon } from 'antd'

export default class CenterHeader extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: 18, margin: '30px 0' }}>
        <Icon type="user" />结算中心
      </div>

    )
  }
}