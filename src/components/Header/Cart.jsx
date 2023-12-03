import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaShoppingBag } from 'react-icons/fa'

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

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
