import './style.scss'
import Carousel from 'react-bootstrap/Carousel'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import product1 from '/images/product/product_1.png'
import product2 from '/images/product/product_2.png'
import product3 from '/images/product/product_3.png'
import product4 from '/images/product/product_4.png'
import product5 from '/images/product/product_5.png'

export default function productCarousel() {
  const images = [product1, product2, product3, product4, product5]

  return (
    <div className="product-carousel">
      <Carousel
        slide={false}
        indicators={true}
        prevIcon={
          <span aria-hidden="true" className="button-slider button-slider--left">
            <FaAngleLeft className="button-icon"></FaAngleLeft>
          </span>
        }
        nextIcon={
          <span aria-hidden="true" className="button-slider button-slider--right">
            <FaAngleRight className="button-icon"></FaAngleRight>
          </span>
        }
      >
        {images.map((url, index) => {
          return (
            <Carousel.Item key={'carousel_img_' + index}>
              <img className="product-carousel__img" src={url} alt="Astro" />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
