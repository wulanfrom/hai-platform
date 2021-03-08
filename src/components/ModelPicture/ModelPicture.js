// import React, { useRef, useEffect, useState } from 'react'
// import './ModelPicture.css'

// // bootstrap components
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'

// function ImageItem(props) {
//   const image = useRef();

//   //on mount
//   useEffect(() => {
//     loadImage(props.data.data)
//   }, []);

//   const loadImage = (file) => {
//     const reader = new FileReader();
//     // modalRef.current.style.display = "block";
//     reader.readAsDataURL(file);
//     // console.log(reader.readAsDataURL(file));
//     reader.onload = function(e) {
//           image.current.style.backgroundImage = `url(${e.target.result})`;
//     }
//   }

//   //if selected, add to the selectedItem list

//   return (
//     <div>
//       <div onClick={ props.selectItem } className="imageContainer" ref={image}></div>
//     </div>
//   )
// }

// function MyVerticallyCenteredModal(props) {
//     const [allItems, updateItems] = useState([]);

//     //on Mount
//     useEffect(() => {
//       //clear the list
//       console.log("all items is updated");
//       props.finalizeItems(allItems);
//     }, [allItems])

//     // send item to selectedItem if clicked
//     const selectItem = (e, file) => {
//       const newList = [...allItems];
//       // check if the list has the file
//       //if no, update the list
//       const itemIndex = newList.findIndex(e => e.id == file.id)
//       if (itemIndex == -1) {
//         //update list
//         updateItems(oldArray => [...oldArray, file]);
//         //update styling
//         e.target.classList.add("selected");
//       }
//       //if it's in it, deselect
//       else {
//         // remove from list
//         newList.splice(itemIndex, 1);
//         updateItems(newList);

//         //remove class
//         e.target.classList.remove("selected")
//       }
//     }

//     // console.log("after change allItems");
//     // console.log(allItems);

//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Choose Processed Images
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* <h4>Centered Modal</h4> */}
//           {/* <p>
//             content
//           </p> */}
//           <div className="allImagesContainer">
//             {props.alldata.map((item, key) => <ImageItem selectItem={ (e) => selectItem(e, item) } data={ item } key={ key } /> )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//           <Button onClick={}>Upload</Button>
//         </Modal.Footer>
//       </Modal>
//     );
// }

// export default function ModelPicture(props) {
//   const [selectedItem, updateSelectedItem] = useState([]);
//   // const [allItems, updateItems] = useState([]);

//   const finalizeItems = (arr) => {
//     // console.log("item finalized");
//     updateSelectedItem(arr);
//   }



//   // console.log("all data: ");
//   // console.log(props.allData);
//   console.log("selectedItem in modal picture");
//   console.log(selectedItem);
//     return (
//         <div>
//             <MyVerticallyCenteredModal
//                 onEnter={() => updateSelectedItem([])} //selectedItem is emptied when modal is created
//                 finalizeItems={ finalizeItems }
//                 // onExit={() => props.addToEditor(selectedItem)} //send items to the improvementPoint
//                 alldata={ props.allData }
//                 show={ props.show }
//                 onHide={() => props.updateModalShow(false)}
//             />
//         </div>
//     )
// }


import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
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

    return (
      <div>
        <div onClick={ props.selectItem } className="imageContainer" ref={image}></div>
      </div>
    )
  }

function ModelPicture({resolve, initialValue = [], data}) {
  const [selectedItem, updateSelectedItem] = useState(initialValue);
  // const [allItems, updateItems] = useState([]);

  function uploadImages() {
    //close modal
    removeDialog();
    // return the selectedImages
    resolve({selectedImages: selectedItem, status: "you selected some images"});
  }

  function closeDialog() {
    // close modal
    removeDialog();
    //return nothing for the selected images
    resolve({selectedImages: [], status: "you didn't select any image"});
  }

  // add item to selectedItem if selected and remove if selected again
    const selectItem = (e, file) => {
      const newList = [...selectedItem];
      // check if the list has the file
      //if no, update the list
      const itemIndex = newList.findIndex(e => e.id == file.id)
      if (itemIndex == -1) {
        //update list
        updateSelectedItem(oldArray => [...oldArray, file]);
        //update styling
        e.target.classList.add("selected");
      }
      //if it's in it, deselect
      else {
        // remove from list
        newList.splice(itemIndex, 1);
        updateSelectedItem(newList);

        //remove class
        e.target.classList.remove("selected")
      }
    }
    return (
        <div>
            <h1>This is the modal</h1>
            <div>
            {/* {data.map((item, key) => <ImageItem selectItem={ (e) => selectItem(e, item) } data={ item } key={ key } /> )} */}
            {data.map((item, key) => <ImageItem selectItem={(e) => selectItem(e, item)} data={ item } key={ key } /> )} 
            </div>
            <Button onClick={closeDialog}>Close</Button>
            <Button onClick={uploadImages}>Upload</Button>
            
        </div>
    );
}

// the function that will return the value retrieved from the modal
export default function getImages(initialValue) {
  console.log("intiial Value");
  console.log(initialValue);
  return new Promise((resolve, reject) => {
    addDialog(initialValue.initialValue, initialValue.allData, resolve);
  });
}

function addDialog(initialValue, data, resolve) {
  const body = document.getElementsByTagName("body")[0];
  const div = document.createElement("div");
  div.setAttribute("id", "getImages-container");
  body.appendChild(div);
  ReactDOM.render (
    <ModelPicture initialValue={initialValue} data={data} resolve={resolve} />,
    div
  );
}


//remove the dialog
function removeDialog() {
  const div = document.getElementById("getImages-container");
  const body = document.getElementsByTagName("body")[0];
  body.removeChild(div);
}