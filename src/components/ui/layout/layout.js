import classes from "./layout.module.css"
import LayoutMenu from "./layoutMenu/layoutMenu"
import LayoutNav from "./layoutNav/layoutNav"

import PropTypes from 'prop-types';

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

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Layout