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


//div for each tower
//div for each disk

//Class = disks
//CLass = towers
//Id = specific disks (Red, Yellow, Blue, Orange)
//Id = towers (Start, Offset, End) Flex-Box

//Read and click, and save and click

