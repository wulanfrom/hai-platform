import React, { useRef, useEffect, useState } from 'react'
import './ModelPicture.css'

// bootstrap components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ImageItem(props) {
  const image = useRef();

  //on mount
  useEffect(() => {
    loadImage(props.data.data)
  }, []);

  const loadImage = (file) => {
    const reader = new FileReader();
    // modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    // console.log(reader.readAsDataURL(file));
    reader.onload = function(e) {
          image.current.style.backgroundImage = `url(${e.target.result})`;
    }
  }

  //if selected, add to the selectedItem list

  return (
    <div>
      <div onClick={ props.selectItem } className="imageContainer" ref={image}></div>
    </div>
  )
}

function MyVerticallyCenteredModal(props) {
    const [allItems, updateItems] = useState([]);

    //if you close the modal, it clears the list
    useEffect(() => {
      //if there elements selected
      // if (allItems.length > 0) {
      //   props.getItems(allItems);
      // }

      //clear the list
      updateItems([]);
    }, [props.show])

    // send item to selectedItem if clicked
    const selectItem = (e, file) => {
      const newList = [...allItems];
      // check if the list has the file
      //if no, update the list
      const itemIndex = newList.findIndex(e => e.id == file.id)
      if (itemIndex == -1) {
        //update list
        updateItems(oldArray => [...oldArray, file]);
        //update styling
        e.target.classList.add("selected");
      }
      //if it's in it, deselect
      else {
        // remove from list
        newList.splice(itemIndex, 1);
        updateItems(newList);

        //remove class
        e.target.classList.remove("selected")
      }
    }

    // console.log("after change allItems");
    // console.log(allItems);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose Processed Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          {/* <p>
            content
          </p> */}
          <div className="allImagesContainer">
            {props.alldata.map((item, key) => <ImageItem selectItem={ (e) => selectItem(e, item) } data={ item } key={ key } /> )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default function ModelPicture(props) {
  const [selectedItem, updateSelectedItem] = useState([]);

  const finalizeItems = (arr) => {
    updateSelectedItem(arr);
  }

  // console.log("all data: ");
  // console.log(props.allData);
  console.log("selectedItem");
  console.log(selectedItem);
    return (
        <div>
            <MyVerticallyCenteredModal
                // getItems = { finalizeItems }
                show={ props.how }
                // selectItem={ selectItem }
                alldata={ props.allData }
                show={props.show}
                onHide={() => props.updateModalShow(false)}
            />
        </div>
    )
}
