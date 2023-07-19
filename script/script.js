
//js for toggle menu

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px"
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "700px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}



// Function to search items by location
function searchByLocation() {
    var locationSearch = document.getElementById("locationSearch").value.toLowerCase();
    var itemCards = document.querySelectorAll(".col-44");

    for (var i = 0; i < itemCards.length; i++) {
        var locationText = itemCards[i].querySelector("h4:nth-child(4)").textContent.toLowerCase();
        if (locationText.includes(locationSearch)) {
            itemCards[i].style.display = "block";
        } else {
            itemCards[i].style.display = "none";
        }
    }
}


// Function to search items by title
function searchByTitle() {
    var titleSearch = document.getElementById("titleSearch").value.toLowerCase();
    var itemCards = document.querySelectorAll(".col-44");

    for (var i = 0; i < itemCards.length; i++) {
        var titleText = itemCards[i].querySelector("h4:nth-child(2)").textContent.toLowerCase();
        if (titleText.includes(titleSearch)) {
            itemCards[i].style.display = "block";
        } else {
            itemCards[i].style.display = "none";
        }
    }
}