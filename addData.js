const dataDiv = document.querySelector("div.data");

const createDiv = () => document.createElement("div");

const createLabels = () => {
    dataDiv.innerHTML = "";
    
    const secLabelDiv = createDiv();
    const innerMolesLabelDiv = createDiv();
    const outerMolesLabelDiv = createDiv();

    secLabelDiv.innerHTML = "Time (sec)";
    innerMolesLabelDiv.innerHTML = "Membrane outer Na amount (mol)";
    outerMolesLabelDiv.innerHTML = "Membrane inner Na amount (mol)";
    
    const divs = [
        secLabelDiv, innerMolesLabelDiv, outerMolesLabelDiv, 
    ];

    divs.map(el => dataDiv.appendChild(el));
}
const addData = (sec, innerMoles, outerMoles) => {

    const secDiv = createDiv();
    const innerMolesDiv = createDiv();
    const outerMolesDiv = createDiv();
    
    secDiv.innerHTML = sec;
    innerMolesDiv.innerHTML = innerMoles;
    outerMolesDiv.innerHTML = outerMoles;
    
    const divs = [
        secDiv,      innerMolesDiv,      outerMolesDiv
    ];
    divs.map(el => dataDiv.appendChild(el));
}