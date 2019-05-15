import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import CounterModal from '../../../components/counter/index'

export default class CenterContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsList: JSON.parse(localStorage.getItem("addData")),
      goodNum: null,
      goodsObj: null,
      isShowed: false,
      summation: 0,
    }
  }
  onChangeState(goodsObj) {
    this.setState({ goodsObj: goodsObj }, () => { this.getTotalPrice() })

  }
  async componentWillMount() {
    const goodsObj = JSON.parse(localStorage.getItem("goodsObj"))
    await this.setState({ goodsObj: goodsObj })
    this.getTotalPrice()
  }
  showModal() {
    if (this.state.isShowed) {
      this.setState({ isShowed: false })
    } else {
      this.setState({ isShowed: true })
    }
  }
  showCounter(data) {
    this.setState({ isShowed: data }, () => { console.log(this.state.isShowed) })
  }

  getTotalPrice() {
    let totalPrice = 0;
    Object.keys((this.state.goodsObj || {})).map((key) => {
      const item = this.state.goodsList.find(item => {
        return item.name === key
      })
      let price = (this.state.goodsObj[key]) * (item.price)
      totalPrice = (totalPrice + price)
      this.setState({ summation: totalPrice })

    })
  }
  render() {
    const { goodsObj, goodsList } = this.state
    return (
      <div>
        {Object.keys(goodsObj || {}).map(key => {
          const item = goodsList.find(item => {
            return item.name === key
          })
          return (
            <ul style={{ listStyle: 'none' }} key={key}>
              <li>商品：{key}</li>
              <li>数量：{goodsObj[key]}个</li>
              <li>单价：{item.price}元</li>
              <li>总价：{(goodsObj[key] * item.price).toFixed(2)}元</li>
            </ul>
          )
        })}
        <div style={{ textAlign: 'center' }}>需支付：{this.state.summation.toFixed(2)}元</div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button type="primary" onClick={this.showModal.bind(this)}>修改</Button>
          <Button type="primary">提交</Button>
        </div>
        {this.state.isShowed && <CounterModal showCounter={this.showCounter.bind(this)} onChangeState={this.onChangeState.bind(this)} />}
      </div>

    )
  }
}