import classes from "./error.module.css"

import PropTypes from 'prop-types';

const Error = (props) => {
    const { children } = props

    return (
        <span className={classes.main}>{children}</span>
    )
}

Error.propTypes = {
    children: PropTypes.node.isRequired
};

export default Error