const filterWords = ["All", "Airplane", "Automobile", "Bird", "Cat", "Deer", "Dog", "Frog", "Horse", "Ship", "Truck"]
const imageFolder = './image-samples/';
//Edit the list of file names here
const fileList = ['airplane-1', 'airplane-2', 'bird-1', 'dog-1']


$(function() {
    initialization()

    $(".filter-word").on("click", function(){
        updateFilter($(this).text())
    })
});

function initialization(){
    console.log(filterWords.length)
    $(".no-image").hide()
    for (var i = 0; i < filterWords.length; i++) {
        $(".dropdown-menu").append("<a class='dropdown-item filter-word'>"+filterWords[i]+"</a>")
    }
    fileList.forEach(function(file){
        $(".display-picture").append("<img class='picture' src='"+imageFolder+file+".jpg'/>")
    })
}

function updateFilter(keyword) {
    $(".display-picture").empty()
    $("#dropdownMenuLink").text(keyword)
    if (keyword === "All"){
        filtered_file = fileList
    }
    else {
        filtered_file = fileList.filter(function(file) {
            return file.includes(keyword.toLowerCase())
        })
    }
    if (filtered_file.length === 0) {
        $(".no-image").show()
    }
    filtered_file.forEach(function(file){
        $(".display-picture").append("<img class='picture' src='"+imageFolder+file+".jpg'/>")
    })
    console.log()

}