//The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
// No disk may be placed on top of a smaller disk.

//********Hints******

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

//Logic:     Cited: (https://js-algorithms.tutorialhorizon.com/2016/01/11/tower-of-hanoi/)
//      Move a tower of height-1 to the buffer peg, using the destination peg.
//      Move the remaining disk to the destination peg.
//      Move the tower of height-1 from the buffer peg to the destination peg using the source peg.

//      To move n disks, the min number of required steps are 2^n - 1. 
//      For example, to move 3 disks the min number of steps are (2^3 - 1) = 7.

//if (let tower of)

const startTower = document.getElementById("start");
const offsetTower = document.getElementById("offset");
const endTower = document.getElementById("end");

let isSelected = false;

startTower.addEventListener('click', clickedTower);
offsetTower.addEventListener('click', clickedTower);
endTower.addEventListener('click', clickedTower);


function clickedTower() {
    if (isSelected === false) {
        let srcTower = event.currentTarget
        topDisk = srcTower.lastElementChild
        if (event.currentTarget.childElementCount > 0) {
            //then select top disk (use last or first)
            topDisk.classList.add("selected")
            //set isSelected to true
            isSelected = true;
        }
    } else {  // isSelected is true
        let destTower = event.currentTarget
        if (destTower.childElementCount === 0) {
            destTower.appendChild(topDisk)
            topDisk.classList.remove("selected")
        } else if (event.currentTarget.childElementCount > 0) {
            isSelected = false
            //if(the disk is larger)
            //  if (event.currentTarget.offsetWidth > event.target.offsetWidth) {

            // move the disk there
            // else {
            //disk is smaller
            //do not move disk

        }
    }
}




    //console.log(clickedTower())



//div for each tower
//div for each disk

//Class = towers
//Id = specific disks (Red, Yellow, Blue, Orange)
//Id = towers (Start, Offset, End) Flex-Box

//Read and click, and save and click

// How big is the content?Section
// If you need to know the actual size of the content, regardless of how much of it is currently visible, 
// you need to use the Element.scrollWidth and Element.scrollHeight properties. These return the width and 
// height of the entire content of an element, even if only part of it is presently visible due to the use of scroll bars.

// For example, if a 600x400 pixel element is being displayed inside a 300x300 pixel scrollbox, scrollWidth will 
// return 600 while scrollHeight will return 400