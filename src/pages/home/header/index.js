import React from 'react'
import { Icon, Input } from 'antd'
import 'antd/dist/antd.css'

export default class HomeHeader extends React.Component {
  render() {
    return (
      <div style={{ position: 'fixed', top: 0, backgroundColor: '#FFFFFF', zIndex: 999, height: 50, width: '100%', display: 'flex', justifyContent: 'space-between', padding: "10px 20px", }
      }>
        <div>上海市<Icon type="down" /></div>
        <div>
          <Input disabled placeholder="请选择" style={{}} />
        </div>
      </div >
    )
  }
}