import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import { ScrollTo } from "react-scroll-to";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
	.multi-border-wrapper-footer {
		z-index: -2;
	}

	.multi-border li:nth-child(1) {
  		background: ${props => props.theme.purple};
	}

	ul.multi-border {
	  	list-style:none;
	  	width:100%;
	  	font-size:0;
	  	padding:0;
	}

	.multi-border li {
	  	display:inline-block;
	  	width:100%;
	  	height:7px;
	}
	
	#footer {
    	background: #efefef;

		.stax-logo {
			max-width: ${props => props.theme.logoStaxWidth};
		}
		.justify-center {
			justify-content: center;
		}
	}

	.multi-border-wrapper-footer .multi-border {
	  	margin: 0;
	}

	section {
	    padding: 60px 0;
	}

	section .section-title {
	    text-align: center;
	    color: #007b5e;
	    margin-bottom: 50px;
	    text-transform: uppercase;
	}

	#footer h5{
	  	padding-left: 0px;
	    padding-bottom: 6px;
	    margin-bottom: 20px;
	    color: ${props => props.theme.grey};
	}

	#footer a {
	    color: ${props => props.theme.grey};
	    text-decoration: none !important;
	    background-color: transparent;
	    -webkit-text-decoration-skip: objects;
	}

	#footer .svg-inline--fa {
	    font-size: 40px;
	}

	#footer ul.social li{
	  	padding: 3px 0;
	}

	#footer ul.social li a i {
	    margin-right: 5px;
	  	font-size:25px;
	  	-webkit-transition: .5s all ease;
	  	-moz-transition: .5s all ease;
	  	transition: .5s all ease;
	}

	#footer ul.social li:hover a i {
	  	font-size:30px;
	  	margin-top:-10px;
	}

	#footer ul.social li a,
	#footer ul.quick-links li a{
	  	color: ${props => props.theme.grey};
	  	cursor: pointer;
	}

	#footer ul.social li a:hover{
	  	color:#eeeeee;
	}

	#footer ul.quick-links li{
	  	padding: 3px 0;
	  	-webkit-transition: .5s all ease;
	  	-moz-transition: .5s all ease;
	  	transition: .5s all ease;
		z-index: -1;
	}

	#footer ul.quick-links li:hover{
	  	padding: 3px 0;
	 	margin-left:5px;
	  	font-weight:700;
	}

	#footer ul.quick-links li a i{
	  	margin-right: 5px;
	}

	#footer ul.quick-links li:hover a i {
	    font-weight: 700;
	}

	@media (max-width:767px){
	  #footer h5 {
	      padding-left: 0;
	      border-left: transparent;
	      padding-bottom: 0px;
	      margin-top: 20px;
	      margin-bottom: 10px;
	  }

	  .footer-logo {
	      text-align: ${props => props.theme.footerLogoResponsive};
	  }
	}
`;


export default function Footer() {
    return (
	<StyledFooter>
		<div className="multi-border-wrapper-footer col-lg-12 px-0">
			<ul className="multi-border">
			    <li></li>
		  	</ul>
	  	</div>
		<section id="footer">
			<div className="container text-center">
				<div className="footer-logo my-2">
					<img className="stax-logo" src="/images/logo.png" alt="logo" />
				</div>
				<div className="row text-center justify-center text-xs-center">
					<div className="col-xs-12 col-sm-6 col-md-6 site-map-title">
						<h5>Site Information</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link to="/">
									<div>Home</div>
								</Link>
							</li>
							<li>
								<Link to="/AboutUs">
									<div>About Us</div>
								</Link>
							</li>
							<li>
								<Link to="/ContactUs">
									<div>Contact Us</div>
								</Link>
							</li>
							<li>
								<Link to="/signin">
									<div>Sign In/Sign Up</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
						<ul className="list-unstyled list-inline social text-center">
							<li className="list-inline-item"><div href="https://github.com/mycso" target="_blank"><FontAwesomeIcon icon={faGithub} /></div></li>
							{/*<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>*/}
							{/* <li className="list-inline-item"><a href="https://www.instagram.com/staxofstories/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li> */}
						</ul>
					</div>
				</div>	
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
						<p className="h6">All rights Reserved.<span> &copy; MS Portfolio</span></p>
						<p className="h6"><span>Designed &amp;
						 Developed By Michael Sokan</span></p>
					</div>
				</div>	
			</div>
		</section>
  	</StyledFooter>
    );
}