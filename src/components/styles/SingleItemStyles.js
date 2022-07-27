import styled from 'styled-components';

const SingleItemStyles = styled.div`
	.item-details{
		margin: 2rem auto;
		display: block;
		grid-auto-columns: 1fr;
		grid-auto-flow: column;
		min-height: 800px;
		img{
			width: 100%;
    		object-fit: cover;
			box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
    		border-radius: 10px;
    	// 		max-width: 1300%;
		//   	transition: transform 0.3s ease-in-out;
		
			@media (max-width: 768px) {
      			height: auto;
				object-fit: contain;
    		}
		}
	 	
	 	// img:hover {
		//   transform: scale(1.2);
		// }

		.carousel-item img[src=""] {
		  	display:none;

		}



		@media (max-width: 768px) {
      		grid-auto-flow: unset;
    	}
	}

	.carousel-item {
    	height: auto;
    }

    @media (max-width: 500px) {
		.carousel img {
		    width: 220%;
		    position: absolute;
		    left: 0;
		}

		.carousel-item {
		    height: auto;
		}
	}

	.nav-link {
    	display: block;
    	padding: 0;
    	font-size: 20px;
	}

	.details{
		margin: 3rem 0rem 0rem;
		font-size: 2rem;
		a {
			font-size: 20px;
		}

		h2{
			color: ${props => props.theme.black};
			font-weight: bold;
		}
		p{
			font-size: 1.1rem;
			white-space: break-spaces;
		}

		@media (max-width: 768px) {
      		text-align: center;
      		margin: 0;
    	}

    	.dv-star-rating {
	    	display: inline !important;
	    	float: left;

	    	@media (max-width: 768px) {
	      		float: none;
	    	}

	    	.dv-star-rating-star {
	    		@media (max-width: 768px) {
	      			float: none !important;
	    		}
	  		}
	  	}

	  	.star-result {
	  		margin-left: 10px;
	  	}
	}

	button.react-slider__btnNext {
		margin: 20px;
		border-radius: 0px !important;
	}

	button.react-slider__btnPrev {
		margin: 20px;
		border-radius: 0px !important;
	}

	.react-slider{
		margin: 0 auto;
		width auto !important;
		max-width 100%;
		display: flex;
		justify-content: center;

		@media (max-width: 768px) {
			width auto !important;
			max-width 700px;
			display: block;
	  	}
	}

	.react-slider__imgZoom {
		background-size: 2490px auto !important;
		height: 647px;
		display: none;

		@media (max-width: 768px) {
			display: none;
		}
	}

	.react-slider__picture::after {
		content: 'No Image...';
		position: absolute;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1
	}

	.react-slider__ul {
		display: block;
	}

	.react-slider__ul li {
		margin: 30px 0px 30px 20px;
		min-height: 200px;
	}

	.react-slider__ul li:nth-child(3n -1) {
		margin-left: 20px;
		margin-right: 0px;
	}

	.react-slider__ul li.active img {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		border: 2px solid #555;
	}

	.react-slider__ul li img {
		position: absolute;
		top: 0;
		left: 0;
	}

	.react-slider__lens {
		display: none;
	}

	button.react-slider__btnPrev {
		position: absolute;
		top: 280px;
	}

	button.react-slider__btnNext {
		position: absolute;
		top: 280px;
	}
`;

export default SingleItemStyles;