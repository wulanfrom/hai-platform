import React from 'react'
import './ModelPicture.css'

// bootstrap components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props, ref) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default function ModelPicture(props) {

    return (
        <div>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button> */}
            <MyVerticallyCenteredModal
                show={props.show}
                onHide={() => props.updateModalShow(false)}
            />
        </div>
    )
}
