import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/diy.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import G6Test from './views/g6-test';
import EidTopology from './views/eid-topology';

import { Button, Input } from 'antd';
import { Switch } from 'antd';
// 导入路由的三个组件
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = React.createElement("h1", null, "React Learn")



// jsx最重要的特性就是，把html标签直接赋值给变量
// 属性命名，驼峰命名
// 特殊属性名 class -> className,for -> htmlFor,tableindex -> tableindex
// 值可以使用圆括号包起来，可以换行写html元素,且可以避免react无故插入分号问题
// 可以在jsx中插入js表达式 通过{}包起来
// jsx中的html标签最外层只能是一个，不能并列多个
const titleJsx = <h1 className='title'>React Learn Jsx</h1>
const name = "zhiyongzhu"
var age = 19
const Hello1 = () => (
  <div>
    <span>这是个箭头函数组件。</span>
  </div>
)
const titleJsx2 = (
  <div>
    <h1 className='title'>
      React Learn Jsx by {name}
    </h1>
    <span>My age is: {age}</span>
    <Hello />
    <Hello1 />
  </div>
)

// 列表渲染，使用数组的map函数
// 列表的标签必须设置key属性，key最好是唯一的
const Persons = [
  { id: 0, name: "Tom", age: 14 },
  { id: 1, name: "Eve", age: 15 },
  { id: 2, name: "Hello", age: 16 },
  { id: 3, name: "Moto", age: 17 },
  { id: 4, name: "Cat", age: 18 },
]
const list = (
  <table>
    <thead>
      <tr>
        <th style={{ color: 'red' }}>姓名</th>
        <th>年龄</th>
      </tr>
    </thead>
    <tbody className='tableBody'>
      {Persons.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
// jsx样式处理
// 1. 行内样式，2. className方式（推荐）
// 同样使用驼峰命名法
// 示例见上面



/**
 * React组件
 * 组件是React中的一等公民
 * 两种创建方式，函数创建，类创建
 */

/**
 * 函数组件，无状态组件
 * 函数名称必须以大写字母开头
 * 必须有返回值，返回的内容为要渲染的内容
 * 调用方式，直接使用 <functionName />进行调用
 */
function Hello() {
  return (
    <div>
      <span>这是个函数组件。</span>
    </div>
  )
}
// 箭头函数组件，这个必须先定义（代码顺序）
const Hello2 = () => (
  <div>
    <span>这是个箭头函数组件。</span>
  </div>
)

/**
 * 类组件，有状态组件
 * 必须以大写字母开头
 * 必须继承ReactComponent父类
 * 必须提供render()方法
 * rander()方法必须有返回值
 */
class ClassHello extends React.Component {
  render() {
    return (
      <div>
        <span>这是个类组件。</span>
      </div>
    )
  }
}


/**
 * 事件处理
 * 事件绑定
 * on+事件名称={事件处理程序}
 * 事件处理函数可以接收一个参数，是当前的时间对象
 */

class EventDemo extends React.Component {
  // constructor() {
  //   super() //es6的固定写法
  //   this.handleClick = this.handleClick.bind(this) // 通过bind方法绑定this
  //   this.state = {
  //     count: 10
  //   }
  // }
  state = {
    count: 10,
    text: "123"
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
    console.log("我触发单击事件了", this.state.count)
  }
  ChangeText(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <span>事件处理</span>
        <div>
          <Button type="primary" size="large" onClick={() => this.handleClick()}>请点我</Button>
          <Switch defaultChecked={false} />
          <span>计数 {this.state.count}</span>
          <Input size="large" style={{ width: 200 }} placeholder="123" onChange={e => this.ChangeText(e)} />
        </div>
        <div>{this.state.text}</div>
      </div>
    )
  }
}

/**
 * 函数组件又叫无状态组件，类组件又叫有状态组件
 * 状态即数据
 * 函数组件只负责数据展示
 * 类组件有自己的状态，负责更新UI
 * 状态是组件内部私有数据，只能在组件内部使用，是一个对象state，是一个特殊的对象
 * 通过this.state.xxx获取状态中的数据
 * 通过setState()修改状态，state的修改会伴随UI的更新，数据驱动视图
 * 事件处理函数中无法读取出this
 */

/**
 * 处理事件绑定this指向问题
 * 1. 利用箭头函数 () => this.handleXXX()
 * 2. 利用ES5中的bind方法，将事件处理程序中的this与组件实例绑定到一起
 * 3. 利用箭头函数形式的class实例方法，即使用箭头函数的方式定义事件处理函数 handleXXX = () =>{}
 */

/**
 * 表单处理
 * 1.受控组件
 * state与表单值绑定, 通过onChange事件调用this.setState进行数据更新
 * TODO: 通过一个函数处理所有表单类型
 */




/**
 * 路由学习
 * 1. 安装npm install react-router-dom
 * 2. 导入
 * 3. 使用router包裹整应用
 * 4. 使用link组件作为
 * 5. 使用route组件配置路由规则和要展示的组件
 */

class RouteDemo extends React.Component {
  render() {
    return (
      <Router>
        <div>
          route 学习
        </div>
        <div className='link'>

          <Link to="/first">页面一</Link>
          <Link to="/">主页</Link>
          <Link to="/g6-test">G6 demo</Link>
          <Link to="/eid-topology">eid服务调用拓扑</Link>
        </div>
        <Routes>
          <Route path="/first" element={<EventDemo />}></Route>
          <Route path="/" element={<ClassHello />}></Route>
          <Route path="/g6-test" element={<G6Test />}></Route>
          <Route path="/eid-topology" element={<EidTopology />}></Route>
        </Routes>
      </Router >
    )
  }
}


// render用于渲染react元素到页面上，只能调用一次，多次调用，最后一个生效
// root.render(title)
// root.render(titleJsx2)
// root.render(list)
// root.render(<Hello />)
// root.render(<ClassHello />)
// root.render(<EventDemo />)
root.render(<RouteDemo />)