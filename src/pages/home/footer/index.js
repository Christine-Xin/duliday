import React from 'react'
import { Icon } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'

export default class HomeFooter extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', backgroundColor: '#FFFFFF', justifyContent: 'space-around', position: 'fixed', bottom: 0, width: "100vw", borderTop: '1px solid #000' }}>
        <div><Link to="/home"><div><Icon type="home" /></div>首页</Link></div>
        <div><Link to="/myjobs"><div><Icon type="file" /></div>商品列表</Link></div>
        <div><Link to="/center"><div><Icon type="user" /></div>结算中心</Link></div>
      </div>
    )
  }
}