import './style.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCarousel from './ProductCarousel'
import Reviews from './Reviews'
import Breadcrumb from './Breadcrumbs'
import { FaShoppingCart } from 'react-icons/fa'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import { useState } from 'react'

function Product() {
  const [show, setShow] = useState(false)

  return (
    <>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu vestibulum, consectetur quam eu, lacinia est. Donec diam sem, dignissim ut dictum quis, tristique et
                  justo.
                </p>
                <Reviews />
                <div className="product__cta">
                  <span className="product__price">249,99€</span>
                  <button type="button" className="button button-add-to-cart" onClick={() => setShow(true)}>
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
      <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
        <Toast bg="success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto d-flex align-items-center gap-2">
              <FaShoppingCart />
              <span>Cart</span>
            </strong>
          </Toast.Header>
          <Toast.Body>Astro A30 added to cart</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default Product
