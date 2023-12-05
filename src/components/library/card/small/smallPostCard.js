import Image from "next/image"
import Link from "next/link"
import classes from "./smallPostCard.module.css"

import PropTypes from 'prop-types';

const SmallPostCard = (props) => {
    const { item } = props

    const hrefLink = `/library/${item.id}`

    return (
        <Link
            href={hrefLink}
            className={classes.main}
        >
            <div className={classes.imageContainer}>
                <Image fill src={item.image} alt={item.title}/>
            </div>
            <p>{item.title}</p>
        </Link>
    )
}

SmallPostCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
};

export default SmallPostCard