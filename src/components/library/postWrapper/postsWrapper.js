import classes from "./postsWrapper.module.css"

const PostsWrapper = (props) => {
    const { children } = props

    return (
        <div className={classes.main}>
            {children}
        </div>
    )
}

export default PostsWrapper