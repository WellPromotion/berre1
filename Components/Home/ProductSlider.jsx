import Carousel from 'react-multi-carousel';
import ProductSingle from '../Global/ProductSingle'

export default function ProductSlider(props) {

  const { products, title } = props;


  return <>
  <div className="product__slider">
    <div className="slider__title">
      <h3>{title}</h3>
    </div>
    <div className="slider__body">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1472
            },
            items: 3,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 916,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1472,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {
          products.length ? (
            products.map( p => 
                <ProductSingle
                    key={ p.id } 
                    product= {p} 
                />)
          ) 
          : 
          <h4 className="__noprod">No products found</h4>
        }
      </Carousel>
    </div>
    
  </div>
  
  </>;
}
