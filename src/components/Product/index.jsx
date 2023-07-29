import './style.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCarousel from './ProductCarousel'
import Reviews from './Reviews'
import Breadcrumb from './Breadcrumbs'
import { FaShoppingCart } from 'react-icons/fa'

function Product() {
  return (
    <div className="product">
      <Container>
        <Row className="product__row">
          <Col xs={12} md={5}>
            <div className="product__info">
              <Breadcrumb />
              <div className="product__detail">
                <h2 className="product__serie">Dark series</h2>
                <h1 className="product__name">Astro A30</h1>
              </div>
              <p className="product__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu vestibulum, consectetur quam eu, lacinia est. Donec diam sem, dignissim ut dictum quis, tristique et justo.
              </p>
              <Reviews />
              <div className="product__cta">
                <span className="product__price">249,99€</span>
                <button type="button" className="button button-add-to-cart">
                  <FaShoppingCart className="icon"></FaShoppingCart>
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <ProductCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product
