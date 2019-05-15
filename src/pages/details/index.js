import React from 'react';
import { Card } from 'antd';
import './details.css'
import DetailFooter from './detailFooter/index'

export default class DetailPages extends React.Component {
  constructor(props) {
    super(props);
    // this.userList = props.location.state.data
    this.state = {
      userId: props.location.state.data,
      jobDetail: null
    }
  }
  componentDidMount() {
    const url = 'https://employee.duliday.com/api/c/job'
    const param = {
      "id": this.state.userId
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {

      if (res.status === 200) {
        res.json().then((data) => {
          this.setState({ jobDetail: data })
        })
      } else {
        alert('出现error')
      }
    })
  }
  render() {
    return (
      <div>
        <div style={{ padding: 15 }}>
          <Card style={{ borderRadius: 10 }} title='工作内容'>
            <p>{((this.state.jobDetail || {}).extra || {}).sub_title}</p>
          </Card>

          {/* <Card title={this.state.jobDetail.title} style={{ borderRadius: 10 }}>
            <p>急需{this.state.jobDetail.need}人</p>
          </Card>
          <Card style={{ borderRadius: 10 }}>
            <p>薪资：{this.state.jobDetail.salary}</p>
          </Card>
          <Card style={{ borderRadius: 10 }} title='工作内容'>
            <p>{((this.state.jobDetail || {}).extra || {}).sub_title}</p>
          </Card>
          <Card style={{ borderRadius: 10 }} title='工作时间'>
            <p>{this.state.jobDetail.id}公司</p>
          </Card>
          <Card style={{ borderRadius: 10 }} title='工作地址'>
            <p>{this.state.jobDetail.title}公司</p>
          </Card>
          <Card style={{ borderRadius: 10 }} title='注意事项'>
            <p>{this.state.jobDetail.officer}</p>
          </Card>
          <Card style={{ borderRadius: 10 }} title='相关资讯'>
            <p>{this.state.jobDetail.id}公司</p>
          </Card> */}

        </div>
        <DetailFooter />
      </div>
    )
  }
}