
import React from "react"
import styled from 'styled-components';
import { Navigate, useParams } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import SingleItemStyles from '../../src/components/styles/SingleItemStyles';
import SliderImage from 'react-zoom-slider';
import Inner from "../components/styles/InnerStyles";
import SomePostList from "../components/somePostList";
// import "./pages.css"

const Center = styled.div`
	text-align: center;
`;

const Post = (props) => {
    let params = useParams();

    const validId = parseInt(params.id)
    if (!validId) {
        return <Navigate to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.name = post.name ? post.name : "No title given"
            fetchedPost.image = post.image ? post.image : "No date given"
            fetchedPost.image2 = post.image2 ? post.image2 : "No date given"
            fetchedPost.image3 = post.image3 ? post.image3 : "No date given"
            fetchedPost.image4 = post.image4 ? post.image4 : "No date given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.description = post.description ? post.description : "No author given"
            fetchedPost.link = post.link ? post.link : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Navigate to="/404" />
    }

    const dataImage = [
        {
            image: fetchedPost?.image
        },
        {
            image: fetchedPost?.image2
        },
        {
            image: fetchedPost?.image3
        },
        {
            image: fetchedPost?.image4
        },
    ];

    return (
        <Inner>
        <SingleItemStyles>
            <div className="item-details">
                <h2>{fetchedPost.name}</h2>
                <SliderImage 
                    data={dataImage} 
                    width="500px" 
                    showDescription={false} 
                    direction="right" 
                />
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <div className="details">
                    <p>{fetchedPost.description}</p>
                    <a href={`${fetchedPost.link}`} target="_blank" rel="noreferrer">{fetchedPost.link}</a>
                    <Markdown source={fetchedPost.content} escapeHtml={false} />
                </div>
            </div>

            <Center>
                <h2>Others you may like</h2>

                <SomePostList/>
            </Center>
        </SingleItemStyles>
        </Inner>
    )
}

export default Post