import React from 'react'
import ReactDOM from 'react-dom/client'
// 引入 样式初始化文件, 一搬放在最前面
import 'normalize.css'

//  UI 框架的样式
// 全局样式
import './assets/css/base.scss'
// 组件的样式


import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
