import style from "App.module.css"

// 此组件用于保存布局的样式
const Layout = (props: any) => {
    return (
        <div className={style.content}>
            {props.children}
        </div>
    )
}
export default Layout