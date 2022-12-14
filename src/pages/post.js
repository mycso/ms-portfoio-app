
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
            fetchedPost.title = post.title ? post.title : "No title given"
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
            image: fetchedPost?.image ? fetchedPost?.image : "No image" 
        },
        {
            image: fetchedPost?.image2 ? fetchedPost?.image2 : "No image" 
        },
        {
            image: fetchedPost?.image3 ? fetchedPost?.image3 : "No image"
        },
        {
            image: fetchedPost?.image4 ? fetchedPost?.image4 : "No image"
        },
    ];
    if (dataImage === "No image given") {
        return <div>Nothing to show</div>
    }

    return (
        <Inner>
        <SingleItemStyles>
            <div className="item-details">
                <h2>{fetchedPost.title}</h2>
                <SliderImage 
                    data={dataImage} 
                    width="500px" 
                    showDescription={false} 
                    direction="right" 
                />
                {/* <small>Published on {fetchedPost.date} by {fetchedPost.author}</small> */}
                <div className="details">
                    <Markdown children={fetchedPost.content} escapeHtml={false} />
                    <a href={`${fetchedPost.link}`} target="_blank" rel="noreferrer">{fetchedPost.link}</a>
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