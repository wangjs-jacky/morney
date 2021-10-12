import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import style from "./App.module.css"
// 导入icon
import apple from './icons/apple.svg'
import shoes from './icons/shoes.svg'
import sun from './icons/sun.svg'

console.log(apple) // 打印结果：/static/media/apple.f64336d1.svg


export default function App() {
  return (
    <Router>
      <div className={style.container}>
        <div className={style.content}>
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
        <div >
          <nav>
            <ul>
              <li>
                <img src={apple}></img>
                <Link to="/tags">标签页</Link>
              </li>
              <li>
                <img src={sun}></img>
                <Link to="/money">记账页</Link>
              </li>
              <li>
                <img src={shoes}></img>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

function NoMatch() {
  return (
    <div>页面不存在，你丫输错地址了吧！</div>
  )
}