import React, { Fragment } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import style from "App.module.css"// 以绝对路径的方式导入
import Nav from "components/Nav"

// import apple from './icons/apple.svg'
// console.log(apple) // 打印结果：/static/media/apple.f64336d1.svg

export default function App() {
  return (
    <Router>
      <div className={style.container}>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Statistics() {
  return (
    <Fragment>
      <div className={style.content}>
        <h2>Statistics</h2>
      </div>
      <Nav />
    </Fragment>
  )
}

function Tags() {
  return (
    <Fragment>
      <div className={style.content}>
        <h2>Tags</h2>
      </div>
      <Nav />
    </Fragment>
  )
}

function Money() {
  return (
    <Fragment>
      <div className={style.content}>
        <h2>Money</h2>
      </div>
      <Nav />
    </Fragment>
  )
}

function NoMatch() {
  return (
    <div>页面不存在，你丫输错地址了吧！</div>
  )
}