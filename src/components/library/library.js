"use client"

import { useState } from "react"
import BigPostCard from "./card/big/bigPostCard"
import SmallPostCard from "./card/small/smallPostCard"
import classes from "./library.module.css"
import PostsWrapper from "./postWrapper/postsWrapper"

import PropTypes from 'prop-types';

const filterPosts = (posts, postType, selectedFilter) => {
    const filterAll = "all"

    return posts.filter(el => el.type === postType && (selectedFilter !== filterAll ? el.tags.includes(selectedFilter) : true))
}

const Library = (props) => {
    const { posts } = props

    const filters = ["all", "shared", "bookmark", "read"]

    const [selectedFilter, setSelectedFilter] = useState(filters[0])

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
                    {filterPosts(posts, "high", selectedFilter).map(el => (
                        <BigPostCard item={el} key={el.id}/>
                    ))}
                </PostsWrapper>
                <PostsWrapper>
                    {filterPosts(posts, "low", selectedFilter).map(el => (
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

PostsWrapper.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        type: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        shortDescription: PropTypes.string,
        videoUrl: PropTypes.string,
        description: PropTypes.string
    }))
};

export default Library