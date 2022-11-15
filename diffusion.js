// Thanks to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Gets a random value in the interval [start, end)
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}
  
// Membrane and model
const MODEL_AREA = 1.9634954084936207e-9; // cm^2
const MODEL_SIDE_LENGTH = 7e-6 //cm
const MEMBRANE_LENGTH = 7e-7;
const MODEL_SIDE_VOLUME = MODEL_AREA * MODEL_SIDE_LENGTH;

// Transport proteins
const PROTEIN_HIGHEST_DIAMETER = 2.6e-7;
const PROTEIN_HIGHEST_AREA = Math.PI * ((PROTEIN_HIGHEST_DIAMETER / 2) ** 2);

const PROTEIN_LOWEST_DIAMETER = 2e-7;
const PROTEIN_LOWEST_AREA = Math.PI * ((PROTEIN_LOWEST_DIAMETER / 2) ** 2);


// Delta time
const dt = 1e-5;


// returns the number value of the element with the id passed as parameter
const numberValue = (id_) => {
    return Number(document.getElementById(id_).value);
}


// Returns the surface area provided by transport proteins
const membraneDiffusionArea = (proteins) => {
    let area = 0;
    for(let i = 0; i < proteins; i++){
        area += getRandom(PROTEIN_LOWEST_AREA, PROTEIN_HIGHEST_AREA);
    }
    return area;
}

// When simulation starts
let data;
document.getElementById("form").addEventListener("submit", ev => {
    data = [];
    // prevent page from reloading
    ev.preventDefault();

    // Get values from user
    const temperature = numberValue("temperature"); // K
    let outerMoles = numberValue("initialMolecules"); // mol
    let innerMoles = numberValue("innerMolecules"); // mol
    
    const proteins = numberValue("proteins"); // mol

    // Sodium diffusion coefficient
    const d_coefficient = diffusionCoefficient(temperature);

    // When the molecules move from the inside to the outside, the flux is negative
    let deltaC; // mol / cm^3
    const recordTime = Math.ceil(1/dt) / 100;
    let count = 0;
    
    createLabels();

    while(count < (2 / dt)){
        deltaC = (innerMoles - outerMoles) / MODEL_SIDE_VOLUME
        let flux = ficksLaw(d_coefficient, MEMBRANE_LENGTH, deltaC);
        let flow = flux * membraneDiffusionArea(proteins);
        let molarChange = flow * dt;
        outerMoles += molarChange;
        innerMoles -= molarChange;
        count += 1;
        if(count % recordTime == 0){
            let time = count / 1e5;
            data.push({
                time,
                outerMoles,
                innerMoles
            });
            addData(count/1e5, outerMoles, innerMoles);
        }
    }

});




