const VISIBLE_DIVISIONS = 147;

const simulatorBox = document.querySelector("div.simulator-box");
simulatorBox.style["grid-template-columns"] = `repeat(${VISIBLE_DIVISIONS}, 1fr)`;

const LOWER_BOUND = 70;
const HIGHER_BOUND= 76;

for(let i = 0; i < VISIBLE_DIVISIONS; i++){
    const newDiv = document.createElement("div");
    if(i == LOWER_BOUND){
        newDiv.className = "membrane-element";
    } else if(i == HIGHER_BOUND){
        newDiv.className = "membrane-element";
    } else {
        newDiv.className = "solution";
    }
    simulatorBox.appendChild(newDiv);
}