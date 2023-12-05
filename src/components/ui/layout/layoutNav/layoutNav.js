import classes from "./layoutNav.module.css"
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io"

import PropTypes from 'prop-types';

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

LayoutNav.propTypes = {
    title: PropTypes.string.isRequired
};

export default LayoutNav