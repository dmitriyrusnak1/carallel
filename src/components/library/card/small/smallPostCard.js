import Image from "next/image"
import Link from "next/link"
import classes from "./smallPostCard.module.css"

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

export default SmallPostCard