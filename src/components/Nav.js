import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SubHeader from './SubHeader';
import { debounce } from '../utilities/helpers';

const StyledHeader = styled.header`

	.multi-border li:nth-child(1) {
  		background: ${props => props.theme.purple};
	}

	.navy-blue{
		color: ${props => props.theme.black};
	}

	.blue{
		color: ${props => props.theme.mainBlue};
	}

	.navbar .svg-inline--fa {
	    font-size: ${props => props.theme.fontSize};
	}

	.stax-logo {
    	max-width: ${props => props.theme.logoStaxWidth};
		cursor: pointer;
	}

	.multi-border-wrapper {
		margin-top: 92px;
		padding:0;
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

	button:focus {
    	outline: none !important
	}

	.active:after {
		content: '';
	}

	.left-margin {
		margin-left: 1rem;
	}

	.right-margin {
		margin-right: 1rem;
	}

  	.navbar-light .navbar-nav .nav-link {
    	text-decoration: none;
    	padding: 10px !important;
    	display: block;
    	color: ${props => props.theme.black};
		background-color: ${props => props.theme.transparent};
		font-weight: 700;
  	}

	a.bg-light:focus, a.bg-light:hover, button.bg-light:focus, button.bg-light:hover {
		background-color: ${props => props.theme.transparent};
	}

  	.nav-link.active {
    	color: ${props => props.theme.purple} !important;
  	}
  	.nav-link.user.active {
    	color: ${props => props.theme.black} !important;
  	}

	.nav-link a {
    	color: ${props => props.theme.black} !important;
  	}

  	a {
  		cursor: pointer;
  	}
`;


export default function Nav() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
  	const [visible, setVisible] = useState(true);  
	  
	const MainNavbarStyles = {
		position: 'fixed',
		height: '95px',
		width: '100%',
		textAlign: 'center',
		transition: 'top 0.6s',
		zIndex: '1030'
	}

	const MultiSubNavbarStyles = {
		position: 'fixed',
		height: '0px',
		width: '100%',
		textAlign: 'center',
		transition: 'top 0.6s',
	}

	const SubNavbarStyles = {
		position: 'fixed',
		height: '95px',
		width: '100%',
		textAlign: 'center',
		transition: 'top 0.6s',
		zIndex: '1000'
	}
	
	const handleScroll = debounce(() => {
	const currentScrollPos = window.pageYOffset;

	setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

	setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
	window.addEventListener('scroll', handleScroll);

	return () => window.removeEventListener('scroll', handleScroll);

	}, [prevScrollPos, visible, handleScroll]);

	return (
		<StyledHeader data-test="nav">
		{/* {process.env.NEXT_PUBLIC_STRIPE_KEY} */}
		<nav style={{ ...MainNavbarStyles, top: visible ? '0' : '-95px' }} className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-0 col-lg-12">
			<div className="container col-lg-12 col-md-12 col-sm-12">
				<Link to="/">
				<div className="navbar-brand left-margin">
					<img className="stax-logo" src="/images/logo.png" alt="logo" />
				</div>
				</Link>

				<button className="navbar-toggler right-margin collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav bg-light ml-auto mt-4 mt-lg-0">
						<li className="nav-item">
							<Link to="/">
								<div className="nav-link">Home</div>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about">
								<div className="nav-link">About Me</div>
							</Link>
						</li>
						<li className="nav-item">
							<div className="nav-link">
								<a target="_blank" rel="noreferrer" href="https://ms-portfolio-studio.netlify.app/images/michaelsokan-cv4.pdf">Resume/CV</a>
							</div>
						</li>
						<li>      
							<Link to="/contactUs">
								<div className="nav-link">Contact Me</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div style={{ ...MultiSubNavbarStyles, top: visible ? '0' : '-95px' }} className="multi-border-wrapper col-lg-12 px-0 fixed-top">
			<ul className="multi-border">
			<li></li>
			</ul>
		</div>
		<div style={{ ...SubNavbarStyles, top: visible ? '0' : '-95px' }}>
			<SubHeader />
		</div>
		</StyledHeader>
  	);
}
