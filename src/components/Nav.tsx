import Icon from "components/Icon";
import {
    BrowserRouter as Router,
    Link,
    NavLink,
} from "react-router-dom";
import style from "App.module.css"


const Nav = (props: any) => (
    <nav className={style.navBar}>
        <ul>
            <li>
                <NavLink to="/tags" activeClassName="selected">
                    <Icon name="apple"></Icon>标签页
                </NavLink>
            </li>
            <li>

                <NavLink to="/money" activeClassName="selected">
                    <Icon name="shoes"></Icon>记账页
                </NavLink>
            </li>
            <li>
                <NavLink to="/statistics" activeClassName="selected">
                    <Icon name="sun"></Icon>
                    统计页
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default Nav