import classes from "./error.module.css"

const Error = (props) => {
    const { children } = props

    return (
        <span className={classes.main}>{children}</span>
    )
}

export default Error