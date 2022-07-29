import React from "react"
import aboutText from "../pages.json"
import AboutSplash from "../components/AboutSplash";
import Inner from "../components/styles/InnerStyles";
import Markdown from "react-markdown";
// import Layout from "../components/layout"

const About = () => {
    console.log(aboutText);

    return (
        <div>
            <AboutSplash />
            <Inner>
            <br/>
                <Markdown children={aboutText[0].content} escapeHtml={false} />
            <br/>
            </Inner>
        </div>
    )
}

export default About