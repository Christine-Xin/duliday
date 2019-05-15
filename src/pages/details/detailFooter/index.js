import React from 'react'
import { Icon, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

export default class DetailFooter extends React.Component {
  render() {
    return (
      <Row style={{ position: 'fixed', bottom: 0, width: '100%', height: '40px', lineHeight: '40px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <Col span={8}><Link to="/home"><Icon type="star" />收藏</Link></Col>
        <Col span={8}><Link to="/home"><Icon type="message" />咨询</Link></Col>
        <Col span={8} style={{ backgroundColor: '#fd684e' }}><Link to="/home">我要报名</Link></Col>
      </Row>
    )
  }
}