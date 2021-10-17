import style from "App.module.css" // 以绝对路径的方式导入
// import style from "./App.module.css" // 以相对路径的方式导入

// 导入icon
// require('icons/apple.svg')
// require('icons/shoes.svg')
// require('icons/sun.svg')

// How to require a icon folder  
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name: string
}

const Icon = (props: Props) => {
    return (
        <svg className={style.icon} fill="purple">
            <use xlinkHref={'#' + props.name}></use>
        </svg>
    )
}

export default Icon