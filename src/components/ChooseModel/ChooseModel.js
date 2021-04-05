import React, { useState } from 'react'
import LabelCard from './LabelCard'

export default function ChooseModel(props) {
    const currentStep = props.currentStep;
    const imageList = props.imageList; // current uploaded images
    const [cardList, setCardList] = useState([]);

    // Sending data to parent
    const sendDataToParent = (data) => {
        // Make or replace value in the cardList
        // cardList[data.dataName] = data;
        let newList = [...cardList];
        newList[data.dataName] = data;
        setCardList(newList);
        // console.log(cardList);
    }

    // everytime the imageList changes, you update the card list
    // useEffect(() => {
    //     // empty the cardList
    //     console.log("image list changed");

    //     // go through the imageList and search for the item with the same key
    //     console.log(imageList);

    //     // replace card list
    // }, [imageList]);

    // Send the cardList to the masterUpload
    // const getLabelResult = () => {
    //     // console.log(cardList);
    //     props.getLabelResult(cardList);
    // }

    // card list
    // console.log("cardList");
    // console.log(cardList.length);
    // console.log(cardList);
    // console.log(filterItem);
    return (
        <div className={`${currentStep == 1 ? "labelCardsWrappers" : "hidden"}`}>
            {/* Show list of cards */}
            { imageList.map((data, i) => 
                <div key={i} className="labelCardsWrappers">
                    <LabelCard name = {data.name} data = {data} sendDataToParent = {sendDataToParent} />
                    {/* <Card name = {data.name} data = {data} /> */}
                </div>
            )}
        </div>
    )
}
