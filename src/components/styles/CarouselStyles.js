import styled from 'styled-components';

const StyledCarousel = styled.div`
	
.carousel img {
    width: 60%;
    @media (max-width: 1120px) {
        width: 100%;
    }

    @media (max-width: 767px) {
          width: 100%;
          position: ${props => props.theme.carouselPosition};
          left: -2%;
          top: 240px;
          display: none;
    }

    @media (max-width: 500px) {
        width: 260%;
        position: absolute;
        left: -82%;
        display: none;
    }
}

.carousel-inner {
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .carousel-item {
        height: auto;
        min-height: 500px;
        background: no-repeat center center scroll;
        -webkit-background-size: ${props => props.theme.carouselBg};
        -moz-background-size: ${props => props.theme.carouselBg};
        -o-background-size: ${props => props.theme.carouselBg};
        background-size: ${props => props.theme.carouselBg};
        max-height: 900px;

        .center-carousel {
            max-width: 1120px;
            margin: 0 auto;
            display: flex;

            @media (max-width: 767px) {
                display: block;
            }

            .me {
                position: relative;
                display: block;
                z-index: 10;

                .me-image{
                    cursor: pointer;
                }
            }

            small {
                font-weight: 700;
                font-size: 16px;
            }
        }
    }
}

.carousel-item:after {
    content:"";
    display:block;
    position:${props => props.theme.carouselPosition} !important;
    top:0;
    bottom:0;
    left:0;
    right:0;

  @media (max-width: 767px) {
          width: ${props => props.theme.carouselResponsiveWidth} !important;
          position: ${props => props.theme.carouselPosition} !important;
          left: ${props => props.theme.carouselLeft} !important;
    }
}
.carousel-caption {
    /* position: ${props => props.theme.carouselPosition} !important; */
    /* right: 15%; */
    /* bottom: 0px; */
    /* left: 15%; */
    z-index: 10;
    padding-top: 2%;
    padding-bottom: 10%;
    color: #fff;
    text-align: left;

    @media (max-width: 767px) {
        padding-top: 19%;
        text-align: center;
    }

    .bubble {
        position: relative;
        background: ${props => props.theme.white};
        color: #000000;
        font-size: 20px;
        line-height: 120px;
        text-align: left;
        width: auto;
        height: auto;
        border-radius: 10px;
        padding: 30px;

        @media (max-width: 767px) {
            color: ${props => props.theme.white};
            background: transparent;
            text-align: center;
        }
    }
    .bubble:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        z-index: 1;
        border-style: solid;
        border-color: transparent #ffffff;
        border-width: 20px 77px 20px 0;
        top: 50%;
        left: -77px;
        margin-top: -20px;

        @media (max-width: 767px) {
            display: block;
            border-color: transparent;
        }
    }
    
}

.social-button-main {
    position: ${props => props.theme.carouselPosition};
    z-index: 999;
    top: 30px;
    right: 2px;
}

.social-button-main .svg-inline--fa {
    font-size: 40px;
    color: #fff;
    @media (max-width: 767px) {
          font-size: 30px;
    }
}

.heading .display-4 {
    @media (max-width: 767px) {
          font-size: 35px;
    }
}

.heading .display-5 {
    @media (max-width: 767px) {
          font-size: 20px;
    }
}

.site-map-title {
    @media (max-width: 767px) {
        border-top: 1px solid #fff;
        padding-bottom: 0px;
        width: 260px;
        margin: 0 auto;
    }
}

.rounded-corner{
    border-radius: ${props => props.theme.roundedCorner} !important;	
}

button {
    width: auto;
    color: white;
    background-color: ${props => props.theme.purple};
    border: 0;
    border-radius: ${props => props.theme.roundedCorner} !important;
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
`;

export default StyledCarousel;