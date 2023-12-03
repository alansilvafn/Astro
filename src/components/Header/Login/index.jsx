import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FaFacebookF, FaGoogle, FaMicrosoft, FaSignInAlt, FaTimes, FaTwitter } from 'react-icons/fa'
import './style.scss'

export default function Login() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <a href="#" className="button-login" onClick={handleShow}>
        <span>Login</span>
        <FaSignInAlt className="button-icon"></FaSignInAlt>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="p-0 login">
          <Button className="btn-close-x" variant="link" onClick={handleClose}>
            <FaTimes />
          </Button>
          <div className="card py-3 px-2">
            <p className="text-center mb-3 mt-2">Log in to your account</p>
            <div className="row mx-auto mb-5">
              <div className="col-4">
                <span className="fab">
                  <FaMicrosoft />
                </span>
              </div>
              <div className="col-4">
                <span className="fab fa-facebook">
                  <FaFacebookF />
                </span>
              </div>
              <div className="col-4">
                <span className="fab fa-google">
                  <FaGoogle />
                </span>
              </div>
            </div>
            <form className="myform">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="row">
                <div className="col-md-6 col-12"></div>
              </div>
              <div className="form-group mt-3 mb-2">
                <Button variant="outline-light" className="mb-4" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                  <span>Login</span>
                </Button>
                <div style={{ fontSize: '12px', textAlign: 'center' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6' }}>
                    Forgot your password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
