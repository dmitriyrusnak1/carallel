"use client"

import { useState } from "react"
import BigPostCard from "./card/big/bigPostCard"
import SmallPostCard from "./card/small/smallPostCard"
import classes from "./library.module.css"
import PostsWrapper from "./postWrapper/postsWrapper"

const Library = (props) => {
    const { posts } = props

    const [selectedFilter, setSelectedFilter] = useState("all")


    const filters = ["all", "shared", "bookmark", "read"]

    return (
        <div className={classes.main}>
            <div className={classes.filters}>
                {filters.map(el => (
                    <button
                        key={el}
                        onClick={() => setSelectedFilter(el)}
                        className={`${classes.filter} ${selectedFilter === el ? classes.activeFilter : ""}`}
                    >
                        {el}
                    </button>
                ))}
            </div>
            <div className={classes.recomended}>
                <h2>Recomended</h2>
                <PostsWrapper>
                    {posts.filter(el => el.type === "high" && (selectedFilter !== "all" ? el.tags.includes(selectedFilter) : true)).map(el => (
                        <BigPostCard item={el} key={el.id}/>
                    ))}
                </PostsWrapper>
                <PostsWrapper>
                    {posts.filter(el => el.type === "low" && (selectedFilter !== "all" ? el.tags.includes(selectedFilter) : true)).map(el => (
                        <SmallPostCard item={el} key={el.id}/>
                    ))}
                </PostsWrapper>
            </div>
            <div className={classes.additional}>
                <h2>Additional Resources</h2>
                <div className={classes.divider}/>
            </div>
        </div>
    )
}

export default Library