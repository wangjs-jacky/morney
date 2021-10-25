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
import { Tag } from "views/Tag"

// import apple from './icons/apple.svg'
// console.log(apple) // 打印结果：/static/media/apple.f64336d1.svg

export default function App() {
  return (
    <Router>
      <div className={style.container}>
        <Switch>
          <Route path="/tags" exact>
            <Tags />
          </Route>
          <Route path="/tags/:tag" exact>
            <Tag />
          </Route>
          <Route path="/money" exact>
            <Money />
          </Route>
          <Route path="/statistics" exact>
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
