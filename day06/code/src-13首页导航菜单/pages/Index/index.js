import React from 'react'

// 导入组件
import { Carousel, Flex } from 'antd-mobile'

// 导入axios
import axios from 'axios'

// 导入导航菜单图片
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

// 导入样式文件
import './index.css'

export default class Index extends React.Component {
  state = {
    // 轮播图状态数据
    swipers: []
  }

  // 获取轮播图数据的方法
  async getSwipers() {
    const res = await axios.get('http://localhost:8080/home/swiper')
    this.setState({
      swipers: res.data.body
    })
  }

  componentDidMount() {
    this.getSwipers()
  }

  // 渲染轮播图结构
  renderSwipers() {
    return this.state.swipers.map(item => (
      <a
        key={item.id}
        href="http://itcast.cn"
        style={{
          display: 'inline-block',
          width: '100%',
          height: 212
        }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))
  }

  render() {
    return (
      <div className="index">
        {/* 轮播图 */}
        <Carousel autoplay infinite autoplayInterval={5000}>
          {this.renderSwipers()}
        </Carousel>

        {/* 导航菜单 */}
        <Flex className="nav">
          <Flex.Item>
            <img src={Nav1} alt="" />
            <h2>整租</h2>
          </Flex.Item>
          <Flex.Item>
            <img src={Nav2} alt="" />
            <h2>合租</h2>
          </Flex.Item>
          <Flex.Item>
            <img src={Nav3} alt="" />
            <h2>地图找房</h2>
          </Flex.Item>
          <Flex.Item>
            <img src={Nav4} alt="" />
            <h2>去出租</h2>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
