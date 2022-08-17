let inputValue = document.getElementById("inputValue");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearItems");
let listOutput = document.getElementById("listOutput");
let arrList = [];

//Eventlistener thats listening to the click from addBtn that add inputvalues to the array arrList.
addBtn.addEventListener("click", addItems);

//Function thats pushing in the value from the input to the arrList and writing it out to HTML
function addItems() {
    arrList.push(inputValue.value);

    let output = "";
    arrList.forEach(foods => {
        output += `<div>${foods}</div>`
    });
    listOutput.innerHTML = output;
    console.log(arrList);
}

//Eventlistener thats listening to a click from clearBtn that empties the array
clearBtn.addEventListener("click", clearItems);

//Function to clear the array from all values.
function clearItems() {
    arrList.length = 0;
    inputValue.value = "";
    listOutput.innerHTML = "";
    console.log(arrList);
}













