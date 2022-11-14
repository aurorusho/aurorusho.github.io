const BOLTZMANN = 1.380649e-16  // cm^2 g s^(-2) K^(-1)
const WATER_VISCOSITY = 0.10016 // cm^(-1) g s^(-1)


// temperature is in K & radius in cm
// Gets the diffusion coefficient of a solute which molecules
// have the radius passed by the radius parameter, in a solution
// with the temperature passed by the temperature parameter
const liquidDiffusionCoefficient = (temperature, radius) => {
    const f = (6 * Math.PI * WATER_VISCOSITY * radius);
    // [f] = cm^(-1) * g * s^(-1) * cm = g * s^(-1)
    // f UNITS = g/s
    
    const D = (BOLTZMANN * temperature) / f;
    /*
    [D] = cm^2 * g * s^(-2) * K^(-1) * K / [f] =
    = cm^2 * g * s^(-2) / [f]                  =
    = cm^2 * g * s^(-2) * s / g                = 
    = cm^2 * s^(-1)
    */
   
    // D units = cm^2 / s
    return D;
};

const SODIUM_RADIUS= 2.27e-8; // cm
// y * z
const MODEL_AREA   = 1.963410e-5; // cm^2

const MODEL_LENGTH = 1.2e-6; // cm

const sideN     = 1_400;
const membraneN = 700;
const totalN    = ((sideN * 2) + membraneN);
const deltaX    = MODEL_LENGTH / totalN; // cm

// Returns the sodium flux from n to n + 1 where n is the iterable
// of the loop that goes through all the small rectangles
const getSodiumFlux = (deltaMol, temperature, area) => {
    const deltaC = deltaMol / (deltaX * area); // mol / cm^3
    const concentrationGradient = deltaC / deltaX; // mol / cm^4
    const D = liquidDiffusionCoefficient(temperature, SODIUM_RADIUS); // cm^2 / s
    return -D * concentrationGradient; // mol / (cm^2 * s)
}


// returns the number value of the element with the id passed as parameter
const numberValue = (id_) => {
    return Number(document.getElementById(id_).value);
}

document.getElementById("form").addEventListener("submit", ev => {
    ev.preventDefault();
    const temperature = numberValue("temperature");
    const moles = numberValue("initialMolecules");
    const proteins = numberValue("proteins");

    const leftSideArray = randomDistribution(sideN, moles); // [mol, mol, ...]
    
    const transMembraneArray = new Array(membraneN).fill(0);
    const rightMembraneArray = new Array(sideN).fill(0);

    let area = MODEL_AREA;
    for(let i = 0; i < leftSideArray.length; i++){
        const value = leftSideArray[i]; //mol
        const nextValue = leftSideArray[i + 1]; // mol
        const deltaMol = nextValue - value; // mol
        const flux = getSodiumFlux(deltaMol, temperature, area); // mol / (cm^2 * s)
    
    }

});




