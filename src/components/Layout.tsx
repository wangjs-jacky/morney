import { Fragment } from "react"
import style from "App.module.css"
import Nav from "./Nav"

// 此组件用于保存布局的样式
const Layout = (props:any) => {
    return (
        <Fragment>
            <div className={style.content}>
                {props.children}
            </div>
            <Nav />
        </Fragment>
    )
}
export default Layout