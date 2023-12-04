import Link from "next/link"
import classes from "./bigPostCard.module.css"

const BigPostCard = (props) => {
    const { item } = props

    const hrefLink = `/library/${item.id}`

    return (
        <Link
            href={hrefLink}
            className={classes.main}
            style={{ backgroundImage: `url(${item.image})` }}
        >
            <div className={classes.title}>
                <p>{item.title}</p>
            </div>
        </Link>
    )
}

export default BigPostCard