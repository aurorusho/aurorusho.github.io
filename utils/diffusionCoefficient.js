const BOLTZMANN = 1.380649e-16  // cm^2 g s^(-2) K^(-1)
const WATER_VISCOSITY = 0.10016 // cm^(-1) g s^(-1)


// temperature is in K & radius in cm
// Gets the diffusion coefficient of a solute which molecules
// have the radius passed by the radius parameter, in a solution
// with the temperature passed by the temperature parameter
const diffusionCoefficient = (temperature/*, radius*/) => {
    // const f = (6 * Math.PI * WATER_VISCOSITY * radius);
    // // [f] = cm^(-1) * g * s^(-1) * cm = g * s^(-1)
    // // f UNITS = g/s

    // const D = (BOLTZMANN * temperature) / f;
    // /*
    // [D] = cm^2 * g * s^(-2) * K^(-1) * K / [f] =
    // = cm^2 * g * s^(-2) / [f]                  =
    // = cm^2 * g * s^(-2) * s / g                = 
    // = cm^2 * s^(-1)
    // */

    // // D units = cm^2 / s
    // return D;
    return 2.32313273e-9 * temperature;
};