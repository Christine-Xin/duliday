import React from 'react'
import { Icon, List, Avatar, Button, Badge } from 'antd'
import { Link } from 'react-router-dom'
import img1 from '../../../imgs/1.png'
import img2 from '../../../imgs/2.png'
import img3 from '../../../imgs/3.png'
import img4 from '../../../imgs/4.png'
import img5 from '../../../imgs/5.png'
import CounterModal from '../../../components/counter/index'


const imgSrcs = '../../../imgs'
export default class MyJobsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      add: 0,
      addData: [],
      isShowed: false,
      goodsNum: null,
      goodsObj: null,
      data: [
        {
          id: 1,
          name: '商品1',
          price: '3.44',
          imgSrc: img1,
        },
        {
          id: 2,
          name: '商品2',
          price: '1.33',
          imgSrc: img2,
        },
        {
          id: 3,
          name: '商品3',
          price: '13.00',
          imgSrc: img3,
        },
        {
          id: 4,
          name: '商品4',
          price: '6.10',
          imgSrc: img4,
        },
        {
          id: 5,
          name: '商品5',
          price: '9.20',
          imgSrc: img5,
        },
      ],
    };
  }

  componentDidMount() {
    this.getTotalNum()
  }
  async onChangeState(goodsObj) {
    await this.setState({ goodsObj: goodsObj })
    let totalNum = 0;
    Object.keys(this.state.goodsObj).map(key => {
      totalNum = totalNum + (this.state.goodsObj[key])
    })
    this.setState({ goodsNum: totalNum })

  }
  async handleAdd(item) {
    item.num = 0;
    await this.setState({
      add: this.state.add + 1,
      addData: [...this.state.addData, item]
    })
    localStorage.setItem("addData", JSON.stringify(this.state.addData))
    const data = JSON.parse(localStorage.getItem("addData"))
    localStorage.setItem("goodsNum", JSON.stringify(JSON.parse(localStorage.getItem("addData")).length))
    const goodsNum = JSON.parse(localStorage.getItem("goodsNum"))
    this.setState({ goodsNum: goodsNum })

    function getWordCnt() {
      var obj = {};
      for (var i = 0, l = data.length; i < l; i++) {
        var item = data[i].name;
        obj[item] = (obj[item] + 1) || 1;
      }

      return obj;
    }
    const obj = getWordCnt();

    localStorage.setItem("goodsObj", JSON.stringify(obj))
    await this.setState({ goodsObj: obj })

  }
  getTotalNum() {
    const goodsObj = JSON.parse(localStorage.getItem("goodsObj"))
    let totalNum = 0;
    Object.keys((goodsObj || {})).forEach(key => {
      totalNum = totalNum + goodsObj[key]
    });
    this.setState({ goodsNum: totalNum })

  }
  async showModal() {
    if (this.state.isShowed) {
      await this.setState({ isShowed: false })
    } else {
      await this.setState({ isShowed: true })
    }
  }
  showCounter(data) {
    this.setState({ isShowed: data }, () => { console.log(this.state.isShowed) })
  }
  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <List
          itemLayout="vertical"
          siz="large"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={<Button type="primary" onClick={this.handleAdd.bind(this, item)}>添加</Button>}

            >
              <List.Item.Meta
                avatar={<img width={100} height={100} alt="img" src={item.imgSrc} />}
                title={item.name}
                description={`价格${item.price}`}
              />

            </List.Item>
          )}

          footer={
            < div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5px' }}>
              <Badge count={this.state.goodsNum}><Button onClick={this.showModal.bind(this)}>购物车</Button></Badge>
              <Link to='/center'><Button type="primary">结算</Button></Link>
            </div >
          }
        />
        {this.state.isShowed && <CounterModal showCounter={this.showCounter.bind(this)} onChangeState={this.onChangeState.bind(this)} />}
      </div>
    )
  }
}