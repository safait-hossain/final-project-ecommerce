import React from 'react';
import './FeaturedProducts.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const FeaturedProducts = ({ products }) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    const firstFourProducts = shuffled.slice(0, 4);
    return (
        <section className="carousel-container">
            <h3 className="m-5">Featured Products</h3>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay="true"
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType="desktop"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <img height='400' width='500' src={firstFourProducts[0].image} alt="" />
                    <h5 className="mt-3">{firstFourProducts[0].title}</h5>
                    <h5>$ {firstFourProducts[0].price}</h5>
                </div>
                <div>
                    <img height='400' width='500' src={firstFourProducts[1].image} alt="" />
                    <h5 className="mt-3">{firstFourProducts[1].title}</h5>
                    <h5>$ {firstFourProducts[1].price}</h5>
                </div>
                <div>
                    <img height='400' width='500' src={firstFourProducts[2].image} alt="" />
                    <h5 className="mt-3">{firstFourProducts[2].title}</h5>
                    <h5>$ {firstFourProducts[2].price}</h5>
                </div>
                <div>
                    <img height='400' width='500' src={firstFourProducts[3].image} alt="" />
                    <h5 className="mt-3">{firstFourProducts[3].title}</h5>
                    <h5>$ {firstFourProducts[3].price}</h5>
                </div>
            </Carousel>;
            <hr />
        </section>
    );
};

export default FeaturedProducts;