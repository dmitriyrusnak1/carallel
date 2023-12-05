import Image from "next/image"
import classes from "./libraryPost.module.css"
import { BiLike, BiDislike } from "react-icons/bi";
import BigPostCard from "../card/big/bigPostCard";
import PostsWrapper from "../postWrapper/postsWrapper";
import AudioPlayer from "@/components/common/audioPlayer/audioPlayer";

import PropTypes from 'prop-types';

const LibraryPost = (props) => {
    const { post, related } = props

    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <div className={classes.imgContainer}>
                    <Image fill src={post.image} alt={post.title}/>
                </div>
                <div className={classes.tags}>
                    {post.tags.map(el => (
                        <div key={el} className={classes.tag}>
                            <p key={el}>{el}</p>
                        </div>
                    ))}
                </div>
                <h1>{post.title}</h1>
                <p className={classes.text}>{post.shortDescription}</p>
                <iframe src={post.videoUrl} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h3>You are a caregiver</h3>
                <AudioPlayer src={"/music.mp3"}/>
                <p className={classes.text}>{post.description}</p>
                <div className={classes.unknownTags}>
                    <div className={classes.unknownTag}>New To Caregiving</div>
                    <div className={classes.unknownTag}>What To Expect</div>
                </div>
                <div className={classes.actions}>
                    <button>
                        <BiLike/>
                    </button>
                    <button>
                        <BiDislike/>
                    </button>
                </div>
            </div>
            <div className={classes.related}>
                <h4>Related Resources</h4>
                <PostsWrapper>
                    {related.map(el => (
                        <BigPostCard item={el} key={el.id}/>
                    ))}
                </PostsWrapper>
            </div>
        </div>
    )
}

export const postType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    shortDescription: PropTypes.string,
    videoUrl: PropTypes.string,
    description: PropTypes.string
}

PostsWrapper.propTypes = {
    post: PropTypes.shape(postType),
    related: PropTypes.arrayOf(PropTypes.shape(postType))
};

export default LibraryPost