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
                    <a target="_blank" rel="noreferrer" href="https://ms-portfolio-studio.netlify.app/images/michaelsokan-cv5.pdf">Resume/CV</a>
            </Inner>
        </div>
    )
}

export default About