import Error from "../error/error"
import classes from "./input.module.css"

const Input = (props) => {
    const {
        label,
        value,
        onChange,
        placeholder,
        type = "text",
        error,
    } = props

    return (
        <div className={classes.field}>
            <label>{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            {!!error && <Error>{error.message}</Error>}
        </div>
    )
}

export default Input
