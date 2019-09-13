//The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
// No disk may be placed on top of a smaller disk.

//********Hints******

// You will want to have the player click twice for each move - first to pick the source tower, 
// second to pick the destination tower. 
// Use a variable to keep track of which mode the player is in.




// Add a click handler to each of the three towers. Use event.currentTarget inside the event 
// handler to determine which tower was clicked.

// Use the DOM property childElementCount to find how many disks are in a tower.

// Use the DOM property lastElementChild to find the disk on top of a tower.

// Use the DOM method appendChild() to add a disk to a tower (you have already used this method many 
// times in previous assignments). Note that when you use appendChild on an element that already has a parent, 
// it is automatically removed from the old parent and added to the new one.
//          function kata(kataNumber, answer) {
//              //Create the stuff I need
//              const div = document.createElement('div')
//              const kataText = document.createElement('p')
//              const answerText = document.createElement('p')
//              const hr = document.createElement('hr')
//              //Give some of that stuff data
//              kataText.innerHTML = 'Kata ' + kataNumber
//              answerText.innerHTML = answer
//              //Put that stuff in the HTML
//              div.appendChild(kataText)
//              div.appendChild(answerText)
//              div.appendChild(hr)
//              container.appendChild(div)
//              //This function retuns nothing
//              }
const startTower = document.getElementById("start");
const offsetTower = document.getElementById("offset")
const endTower = document.getElementById("end");

let isSelected = false;


startTower.addEventListener('click', clickedTower);
offsetTower.addEventListener('click', clickedTower);
endTower.addEventListener('click', clickedTower);

function clickedTower() {
    // // if(isSelected === false) {
    //     //if this does contain child elements
    //     //then select top disk (use last or first)
    //     //set isSelected to true
    // } else { // isSelected is true
    //     //does this tower have disks? look for number of child elements
    //         if //the disk is larger
    //             // move the disk there
    //         else {
    //             //disk is smaller
    //             //do not move disk
    //         }
    // }
    // event.currentTarget.classList.add('selected');
}

// set clickHandler to each tower
// write a function that when each tower is clicked, it selects 
// the first disk on that tower and moves it to second clicked location.
// 




//div for each tower
//div for each disk

//CLass = towers
//Id = specific disks (Red, Yellow, Blue, Orange)
//Id = towers (Start, Offset, End) Flex-Box

//Read and click, and save and click

