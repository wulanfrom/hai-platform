import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './ModelPicture.css'

// bootstrap components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import ProgressBar from 'react-bootstrap/ProgressBar'

function ImageItem(props) {
    const image = useRef();
  
    //on mount
    useEffect(() => {
      loadImage(props.data)
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

    return (
      <table className='modalTable'>
        <tr className='modalTr'>
          <td className='imageContainer' ref={image}> </td>
        </tr>
        <tr className='modalTr'>
          <td className='imageContainerLabel'> {props.label} </td>
        </tr>
        </table>
    )
  }

function ModelPicture({resolve, initialValue = [], show, data, progress}) {
  const [selectedItem, updateSelectedItem] = useState(initialValue);
  const [modalShow, changeShow] = useState(show);
  // const now = progress;
  // const [allItems, updateItems] = useState([]);

  const uploadImages = () => {
    //close modal
    removeDialog();
    changeShow(false);
    // return the selectedImages
    resolve({selectedImages: selectedItem, status: "you selected some images"});
  }

  const closeDialog = () => {
    // close modal
    removeDialog();
    changeShow(false);
    //return nothing for the selected images
    resolve({selectedImages: [], status: "you didn't select any image"});
  }

  // add item to selectedItem if selected and remove if selected again
    const selectItem = (e, file) => {
      console.log(e);
      console.log(file);

      var cur = e.target;

      for(var i=0;i<100;i++) {
        console.log(cur);

        if(cur.classList.contains("singleItemOnModal")) break;
        else cur = cur.parentNode;
      }

      const newList = [...selectedItem];
      // check if the list has the file
      //if no, update the list
      const itemIndex = newList.findIndex(elem => elem.id === file.id)
      
      if (itemIndex === -1) {
        //update list
        updateSelectedItem(oldArray => [...oldArray, file]);
        //update styling
        cur.classList.add("selected");
      }
      //if it's in it, deselect
      else {
        // remove from list
        newList.splice(itemIndex, 1);
        updateSelectedItem(newList);

        //remove class
        cur.classList.remove("selected")
      }
    }
    return (
        // <div>
        //     <h1>This is the modal</h1>
        //     <div>
        //     {/* {data.map((item, key) => <ImageItem selectItem={ (e) => selectItem(e, item) } data={ item } key={ key } /> )} */}
        //     {data.map((item, key) => <ImageItem selectItem={(e) => selectItem(e, item)} data={ item } key={ key } /> )} 
        //     </div>
        //     <Button onClick={closeDialog}>Close</Button>
        //     <Button onClick={uploadImages}>Upload</Button>
            
        // </div>
        <div>
            <Modal
              // {...props}[
              onHide={() => changeShow(false)}
              show={modalShow}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Select Images to Put on Markdown
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              {data.map((item, key) => 
                <div className='singleItemOnModal' onClick={e => selectItem(e, item)}>
                  <ImageItem data={item.data} key={key} label="image" />
                  <ImageItem data={item.LIMEPic} key={key} label="explanation" />
                </div>
              )} 
              {/* <div>
                <Button onClick={closeDialog}>Close</Button>
                <Button onClick={uploadImages}>Upload</Button>

              </div> */}
              </Modal.Body>
              <Modal.Footer>
                {/* <Button onClick={() => changeShow(false)}>Close</Button> */}
                {/* <ProgressBar now={now} label={`${now}%`} /> */}
                <Button onClick={closeDialog}>Close</Button>
                <Button onClick={uploadImages}>Upload</Button>
              </Modal.Footer>
            </Modal>
        </div>
    );
}

// the function that will return the value retrieved from the modal
export default function getImages(initialValue) {
  // console.log("intiial Value");
  // console.log(initialValue);
  return new Promise((resolve, reject) => {
    addDialog(initialValue.initialValue, initialValue.allData, initialValue.modalShow, initialValue.progress, resolve)
  });
}

function addDialog(initialValue, data, show, progress, resolve) {
  const body = document.getElementsByTagName("body")[0];
  const div = document.createElement("div");
  div.setAttribute("id", "getImages-container");
  body.appendChild(div);
  // console.log("show: ");
  // console.log(show);
  ReactDOM.render (
    <ModelPicture initialValue={initialValue} data={data} show={show} progress={progress} resolve={resolve} />,
    div
  );
}


//remove the dialog
function removeDialog() {
  const div = document.getElementById("getImages-container");
  const body = document.getElementsByTagName("body")[0];
  body.removeChild(div);
}