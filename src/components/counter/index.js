import React from 'react'
import { Icon } from 'antd'
import './counter.css'

export default class CounterModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      summation: 0,
      goodsObj: JSON.parse(localStorage.getItem("goodsObj")),
      originalObj: null,
      dataList: JSON.parse(localStorage.getItem("addData")),
      goodsNum: 0,
      isShowed: false
    }
  }
  componentWillMount() {
    const data = JSON.parse(localStorage.getItem("goodsObj"))
    this.setState({ originalObj: data })

  }
  componentDidMount() {
    //计算商品总数量
    this.totalNum()
    this.getTotalPrice()

  }
  originalGoodsObj() {
    this.setState({ goodsObj: this.state.originalObj })
  }
  getTotalPrice() {
    let totalPrice = 0;
    Object.keys(this.state.goodsObj).map((key) => {
      const item = this.state.dataList.find(item => {
        return item.name === key
      })
      let price = (this.state.goodsObj[key]) * (item.price)

      totalPrice = (totalPrice + price)

      this.setState({ summation: totalPrice })

    })
  }
  async handleAdd(key) {
    const newObj = Object.assign({}, this.state.goodsObj, { [key]: this.state.goodsObj[key] + 1 })
    await this.setState({ goodsObj: newObj })
    this.totalNum()
    this.getTotalPrice()
  }

  async handleDelete(key) {
    const newObj = Object.assign({}, this.state.goodsObj, { [key]: this.state.goodsObj[key] - 1 })
    await this.setState({ goodsObj: newObj })
    this.totalNum()
    this.getTotalPrice()
  }
  totalNum() {
    const goodsObj = this.state.goodsObj
    let totalNum = 0;
    Object.keys(goodsObj).forEach(key => {
      totalNum = totalNum + goodsObj[key]
    });
    this.setState({ goodsNum: totalNum }, () => { console.log(this.state.goodsNum) })

  }


  handleShow(data, num) {
    this.props.showCounter(data)
    if (num === 0) {
      this.originalGoodsObj()
    } else {
      localStorage.setItem("goodsObj", JSON.stringify(this.state.goodsObj))
      this.props.onChangeState(this.state.goodsObj)
    }
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">合计：{this.state.summation.toFixed(2)}元</div>
          <div className="modal-content">
            {
              Object.keys(this.state.goodsObj).map(key => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                  <div>{key}</div>
                  <div>
                    <Icon type="minus-circle" onClick={this.handleDelete.bind(this, key)} />
                    {this.state.goodsObj[key]}
                    <Icon type="plus-circle" onClick={this.handleAdd.bind(this, key)} />

                  </div>
                </div>
              ))
            }
          </div>
          <div className="modal-operator">
            <button className="modal-operator-close" onClick={this.handleShow.bind(this, this.state.isShowed, 0)} >取消</button>
            <button className="modal-operator-confirm" onClick={this.handleShow.bind(this, this.state.isShowed)}>确认</button>
          </div>
        </div >
        <div className="mask"></div>
      </div >
    )
  }
}