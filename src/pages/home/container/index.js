import React from 'react'
import { Carousel, Card, Spin } from 'antd'
import './container.css'
import { Link } from 'react-router-dom'



export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      needFixed: false,
      isLoading: false,
      cardList: [],

      city_id: 310100,
      stick_ids: [2],
      page: 0,
    }

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.fetchData()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let onPullUpHeight = this.refs.onPullUp.clientHeight;
    let documentHeight = document.documentElement.clientHeight;
    let documentTop = document.documentElement.scrollTop;
    // 数据的高度》屏幕的高度 && 数据的高度=屏幕的高度+滚动的高度-70
    if (onPullUpHeight > documentHeight && onPullUpHeight === documentHeight + documentTop - 70) {
      this.setState({ page: this.state.page + 1 }, this.fetchData())

    }
  }

  fetchData() {
    const { page, city_id, stick_ids, } = this.state;
    // this.state.isLoading = true
    this.setState({ isLoading: true })
    const url = 'https://employee.duliday.com/api/c/experiment/jobs'
    const param = {
      page,
      city_id,
      stick_ids,
    }
    const imgfixed = {
      id: 20,
      render: () => {
        return <img id='fixed-menu' alt="imgFixed" className={`menu ${this.state.needFixed ? 'fixed' : ''}`} style={{ width: '80%', height: '100px' }} src={require('../../../imgs/2.png')} ></img>
      }
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.status === 200) {
          // this.state.isLoading = false;
          this.setState({ isLoading: false })
          res.json().then(data => {
            if (page === 0) {
              data.splice(4, 0, imgfixed)
            }
            if (data !== []) {
              this.setState({ cardList: [...this.state.cardList, ...data] })
            }

          })
        } else {
          // this.state.isLoading = false;
          this.setState({ isLoading: false })
          alert('出现error')
        }
      })
      .catch(err => {
      })
  }
  render() {
    // return (
    //   <div ref="onPullUp" style={{ marginTop: '50px', backgroundColor: '#AAAAAA' }}>
    //     <div>
    //       <Carousel autoplay>
    //         <div><h3>1</h3></div>
    //         <div><h3>2</h3></div>
    //         <div><h3>3</h3></div>
    //         <div><h3>4</h3></div>
    //       </Carousel>
    //     </div>
    //     <div>
    //       <ul style={{ margin: 0, padding: 0, display: "flex", listStyle: "none", justifyContent: 'space-around' }}>
    //         <a href="java script: 0"><li>全部</li></a>
    //         <a href="java script: 0"><li>附近</li></a>
    //         <a href="java script: 0"><li>寒假</li></a>
    //         <a href="java script: 0"><li>日结</li></a>
    //         <a href="java script: 0"><li>品牌</li></a >
    //       </ul>
    //     </div>
    //     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px' }}>
    //       <a href="java script: 0"><div>精选推荐</div></a>
    //       <a href="java script: 0"><div>大牌兼职</div></a>
    //       <a href="java script: 0"><div>优先上岗</div></a>
    //     </div>
    //     <div style={{ margin: '20px 5px', }}>
    //       {
    //         (this.state.cardList || []).map((item, index) => {
    //           return (
    //             <Link key={index} to={{ pathname: `/home/detail/${item.id}`, state: { data: item.id } }}>
    //               <Card style={{ margin: '10px 0px', borderRadius: '10px' }} className={(this.state.needFixed && index === 4) ? 'fixed' : ''}>
    //                 <p>{item.title}</p>
    //                 <p>{item.salary}</p>
    //                 {item.render && item.render()}
    //               </Card>
    //             </Link>
    //           )
    //         })
    //       }

    //     </div>
    //     <div>

    //     </div>
    //   </div >
    // )

    if (this.state.isLoading === false) {
      return (
        <div ref="onPullUp" style={{ marginTop: '50px', backgroundColor: '#AAAAAA' }}>
          <div>
            <Carousel autoplay>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </div>
          <div>
            <ul style={{ margin: 0, padding: 0, display: "flex", listStyle: "none", justifyContent: 'space-around' }}>
              <a href="java script: 0"><li>全部</li></a>
              <a href="java script: 0"><li>附近</li></a>
              <a href="java script: 0"><li>寒假</li></a>
              <a href="java script: 0"><li>日结</li></a>
              <a href="java script: 0"><li>品牌</li></a >
            </ul>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px' }}>
            <a href="java script: 0"><div>精选推荐</div></a>
            <a href="java script: 0"><div>大牌兼职</div></a>
            <a href="java script: 0"><div>优先上岗</div></a>
          </div>
          <div style={{ margin: '20px 5px 70px', }}>
            {
              (this.state.cardList || []).map((item, index) => {
                return (
                  <Link key={index} to={{ pathname: `/home/detail/${item.id}`, state: { data: item.id } }}>
                    <Card style={{ margin: '10px 0px', borderRadius: '10px' }} className={(this.state.needFixed && index === 4) ? 'fixed' : ''}>
                      <p>{item.title}</p>
                      <p>{item.salary}</p>
                      {item.render && item.render()}
                    </Card>
                  </Link>
                )
              })
            }

          </div>
          <div>

          </div>
        </div >
      )
    } else {
      return <div><Spin /></div>
    }
  }

}