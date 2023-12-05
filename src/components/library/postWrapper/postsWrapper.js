import classes from "./postsWrapper.module.css"
import PropTypes from 'prop-types';

const PostsWrapper = (props) => {
    const { children } = props

    return (
        <div className={classes.main}>
            {children}
        </div>
    )
}

PostsWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default PostsWrapper