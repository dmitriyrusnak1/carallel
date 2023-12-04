import classes from "./layout.module.css"
import LayoutMenu from "./layoutMenu/layoutMenu"
import LayoutNav from "./layoutNav/layoutNav"

const Layout = (props) => {
    const { children, title } = props

    return (
        <div className={classes.main}>
            <LayoutNav title={title}/>
            <div className={classes.body}>
                {children}
            </div>
            <LayoutMenu/>
        </div>
    )
}

export default Layout