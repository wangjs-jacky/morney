import Icon from "components/Icon";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import style from "App.module.css"


const Nav = (props: any) => {
    return (
        <nav className={style.navBar}>
            <ul >
                <li>
                    <Icon name="apple"></Icon>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name="shoes"></Icon>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon name="sun"></Icon>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav