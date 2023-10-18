const waterTempParagraph = document.getElementById("water-temp");
console.dir(waterTempParagraph);
waterTempParagraph.textContent =  "The water is alredy cold."

//Query Selector
const firstTableHeading = document.querySelector("th");
console.log(firstTableHeading);
const allTableheadings = document.querySelectorAll ("th");
console.log(allTableheadings);
const newTH = document.createElement("th");
const allTableHeadings = document.getElementsByName("th");
newTH.textContent = "new TH";
trParent.append(newTH);
const trParent = document.querySelector("table thead > tr");
console.log(allTableHeadings);



//button<>/button>
const newBtn = document.createElement("button");
newBtn.textContent = "Submit Review";
newBTn = document.createElement("th");
//remove an element
newTH.remove();

//grab a reference to the hot dog -item
const referenceListItem = document.querySelector(".hotdog-item");
//Grab a reference to the ordered list
const parent01 = document.querySelector("ol");
//add (append) the newly created button in the right spot
parent01.iscertBefore(newBtn, referenceListItem);
