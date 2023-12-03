import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaShoppingBag, FaTimes } from 'react-icons/fa'
import product1 from '/images/product/product_1.png'
import './style.scss'

export default function Cart() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <a href="#" className="button-bag" onClick={handleShow}>
        <FaShoppingBag className="button-icon"></FaShoppingBag>
        <span> (1)</span>
      </a>

      <Offcanvas className="cart-preview" show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table className="table table-responsive table-borderless mb-4">
            <tbody>
              <tr className="align-middle alert border-bottom" role="alert">
                <td>
                  <img className="pic" src={product1} width={40} alt="Product preview" />
                </td>
                <td>
                  <div>
                    <p className="m-0 fw-bold">Astro A30</p>
                  </div>
                </td>
                <td className="text-end">
                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <strong>249,99€</strong>
                    <FaTimes className="ms-2" style={{ cursor: 'pointer', opacity: 0.6 }} />
                  </div>
                </td>
              </tr>
              <tr className="align-middle alert border-bottom" role="alert">
                <td>
                  <img className="pic" src="/images/product/product_4.png" width={40} alt="Product preview" />
                </td>
                <td>
                  <div>
                    <p className="m-0 fw-bold">Astro A45</p>
                  </div>
                </td>
                <td className="text-end">
                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <strong>189,99€</strong>
                    <FaTimes className="ms-2" style={{ cursor: 'pointer', opacity: 0.6 }} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className="m-2 fw-bold">Promo</p>
            <img className="w-100" style={{ borderRadius: '8px' }} src="/images/promo.jpg" alt="" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
