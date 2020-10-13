import React, {useState, useEffect} from "react"
import Dropdown from "react-bootstrap/Dropdown"

const DataSearching = () => {
    const filterWords = ["All", "Airplane", "Automobile", "Bird", "Cat", "Deer", "Dog", "Frog", "Horse", "Ship", "Truck"]
    const fileList = ['airplane-1', 'airplane-2', 'bird-1', 'dog-1']
    const [imageAvail, setImageAvail] = useState('d-none')
    const [currFilter, setCurrFilter] = useState('All')
    const [currList, setCurrList] = useState(fileList)

    function createDropdownList() {
        var list = []
        filterWords.forEach(function(word) {
            list.push(<Dropdown.Item onClick={(e) => {updateFilter(word)}}> {word} </Dropdown.Item>)
        })
        return list
    }

    function initializePic() {
        
        const images = currList.map(function(picname, i) {
            return (<img src={require(`../image-samples/${picname}.jpg`)} key={i} style={{width: "150px", height: "150px", margin: "1rem"}}/>)
        })
        return images
    }

    function updateFilter(keyword) {
        setCurrFilter(keyword)
        if (keyword === "All") {
            setCurrList(fileList)
        }
        else {
            var updatedList = fileList.filter(function(file) {
                return file.includes(keyword.toLowerCase())
            })
            
            if (updatedList.length === 0){
                setImageAvail("")
            }
            setCurrList(updatedList)
        }
    }

    return(
        <div class="container" style={{marginTop: '2rem'}}>
            <div class="row">
                <div class="col-md-4">
                    <h4> Labels: </h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {currFilter}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {createDropdownList()}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div class="col-md-8">
                    <div class='text-center'>
                        <h3> Dataset Pictures</h3>
                        <h4 class={'no-image ' + imageAvail} style={{marginTop: "2rem"}}> No image available. </h4>
                    </div>
                    <div class='display-picture'>
                    {initializePic()}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DataSearching