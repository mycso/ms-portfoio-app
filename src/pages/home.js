import React from "react"
import PostList from "../components/postlist"
import Inner from "../components/styles/InnerStyles";
import HomeCarousel from '../components/HomeCarousel';
// import "./pages.css"

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <Inner>
                <PostList />
            </Inner>
        </div>
    )
}

export default Home