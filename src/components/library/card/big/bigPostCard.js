import Link from "next/link"
import classes from "./bigPostCard.module.css"

import PropTypes from 'prop-types';

const BigPostCard = (props) => {
    const { item } = props

    const hrefLink = `/library/${item.id}`
    const bgImage = `url(${item.image})`

    return (
        <Link
            href={hrefLink}
            className={classes.main}
            style={{ backgroundImage: bgImage }}
        >
            <div className={classes.title}>
                <p>{item.title}</p>
            </div>
        </Link>
    )
}

BigPostCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
};

export default BigPostCard