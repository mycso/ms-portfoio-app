import StyledCarousel from './styles/CarouselStyles';
import { ScrollTo } from "react-scroll-to"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function HomeCarousel() {
  const [changeImage, setChangeImage] = useState(false);

	const handleClick = () => {
		setChangeImage(prevMode => !prevMode)
	}

  return (
    <StyledCarousel>
		<div>
		  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators d-none">
		      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		    </ol>
		    <div className="social-button-main">
		      <div className="col-xs-12 col-sm-12 col-md-12">
		         <ul className="list-unstyled list-inline social text-center">
		          <li className="list-inline-item"><a href="https://github.com/mycso" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
		        </ul> 
		      </div>
		    </div> 
		    <div className="carousel-inner" role="listbox">
		      <div className="carousel-item active">
				<div className="center-carousel text-center">
					<div className="col-xs-12 col-md-6 col-lg-6 me">
						<img className="me-image" 
						onClick={handleClick} 
						src={changeImage ? "/images/fake-me2.png" : "/images/fake-me.png"} 
						alt={changeImage ? "/images/fake-me2.png" : "/images/fake-me.png"}
					/> 
					</div>
					<div className="col-xs-12 col-md-6 col-lg-6 my-5 carousel-caption heading d-md-block"> 
						<div className="bubble">
							<h2 className="display-4">Hi, I am Michael Sokan</h2>
							<h3 className="display-5">Pleased to meet you. Welcome to my world of design and code</h3>
						</div>
						<small>Front End Developer - UI Designer</small>
						<br />
						<br />
						<ScrollTo>
							{({ scroll }) => (
								<button onClick={() => scroll({ x: 20, y: 830, smooth: true })} className="btn btn-outline-light rounded-corner">See my work</button>
							)}
						</ScrollTo>
					</div>
				</div>
		      </div>
		    </div>
		    <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="sr-only">Next</span>
		    </a>
		  </div>
	  </div>
	  </StyledCarousel>
  );
}
