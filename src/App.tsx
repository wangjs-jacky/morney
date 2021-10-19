import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import style from "App.module.css"// 以绝对路径的方式导入

// 导入views中的文件
import Tags from "views/Tags"
import Statistics from "views/Statistics"
import Money from "views/Money"
import NoMatch from "views/NoMatch"

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
