const startTower = document.getElementById("start");
const offsetTower = document.getElementById("offset");
const endTower = document.getElementById("end");

let isSelected = false;

startTower.addEventListener('click', movePieces);
offsetTower.addEventListener('click', movePieces);
endTower.addEventListener('click', movePieces);


function movePieces() {
    if (isSelected === false) {
        let srcTower = event.currentTarget
        topDisk = srcTower.lastElementChild
        if (event.currentTarget.childElementCount > 0) {
            topDisk.classList.add("selected")
            isSelected = true;
        }
    } else {
        let destTower = event.currentTarget;
        let bottomDisk = destTower.lastElementChild;
        if (destTower.childElementCount === 0) {
            destTower.appendChild(topDisk)
            topDisk.classList.remove("selected")
            isSelected = false;
        } else if (event.currentTarget.childElementCount > 0) {
            isSelected = false;
            if (bottomDisk.scrollWidth > topDisk.scrollWidth) {
                destTower.appendChild(topDisk);
                topDisk.classList.remove("selected");
                checkForWin();
            } else {
                topDisk.classList.remove('selected');
            }
        }
    }
}

function checkForWin() {
    if (endTower.childElementCount === 4) {
        endTower.removeEventListener('click', movePieces);
        alert(`Great Job!`);
    }
}

