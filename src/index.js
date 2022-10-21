import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/diy.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

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
const titleJsx2 = (
  <div>
    <h1 className='title'>
      React Learn Jsx by {name}
    </h1>
    <span>My age is: {age}</span>
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



// render用于渲染react元素到页面上，只能调用一次，多次调用，最后一个生效
// root.render(title)
// root.render(titleJsx2)
root.render(list)