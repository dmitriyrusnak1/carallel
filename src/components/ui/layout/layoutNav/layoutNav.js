import classes from "./layoutNav.module.css"
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io"

const LayoutNav = (props) => {
    const { title } = props

    return (
        <div className={classes.main}>
            <IoSettingsOutline/>
            <h2>{title}</h2>
            <IoIosNotificationsOutline/>
        </div>
    )
}

export default LayoutNav