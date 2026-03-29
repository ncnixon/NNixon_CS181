console.log("Demo Script Connected...");

/// Variables ///
/// ------------------------------ ///
const Driver_Name = "Nathaniel Nixon";
const Trip_Distance_Miles = 2127;
const MPG = 26;
const Gas_Price = 3.79;
const Fuel_Capacity = 15.3;
let totalGasAvailable = undefined;
let Is_Round_Trip = true; // Set default to true for demonstration
let Total_Distance = undefined;
let gas_stops = 0;

/// Derived/Calculated Variables ///
/// ------------------------------ ///

/// calculates total gas available ///
function calculateTotalGasAvailable(Fuel_Capacity, MPG) {
  return Fuel_Capacity * MPG;
}

/// calculates gallons needed  for trip ///
function calculateGallonsNeeded(Total_Distance, MPG) {
  return Total_Distance / MPG;
}

/// checks if the trip is a round trip ///
function checkRoundTrip(Trip_Distance_Miles, Total_Distance, Is_Round_Trip) {
  if (Is_Round_Trip === true) {
    Total_Distance = Trip_Distance_Miles * 2;
  } else if (Is_Round_Trip === false) {
    Total_Distance = Trip_Distance_Miles;
  }
  return Total_Distance;
}

/// calculates total distance based on round trip or one way ///
Total_Distance = checkRoundTrip(
  Trip_Distance_Miles,
  Total_Distance,
  Is_Round_Trip,
);
console.log("Total Distance (In Miles ):", Total_Distance);

/// calculates fuel cost for trip ///
function calculateFuelCost(Gallons_Needed, Gas_Price) {
  return Gallons_Needed * Gas_Price;
}

/// ------------------------------ ///
/// Main Program ///

function stoppingForGas(Total_Distance, totalGasAvailable, gas_stops) {
  const tankRange = totalGasAvailable; // miles per full tank
  if (totalGasAvailable < Total_Distance) {
    let milesCovered = totalGasAvailable;
    gas_stops = 0;
    while (milesCovered < Total_Distance) {
      gas_stops += 1;
      milesCovered += totalGasAvailable; // Assume refilling to full tank each time
    }
    console.log(
      `You will need to stop for gas ${gas_stops} time(s) during your trip.`,
    );
  } else {
    console.log("You have enough gas for the trip.");
  }
}

let Gallons_Needed = calculateGallonsNeeded(Total_Distance, MPG);
console.log("Gallons Needed:", Gallons_Needed.toFixed(2));

const Fuel_Cost = calculateFuelCost(Gallons_Needed, Gas_Price);
console.log("Fuel Cost (In Dollars):", Fuel_Cost.toFixed(2));

totalGasAvailable = calculateTotalGasAvailable(Fuel_Capacity, MPG);
console.log("Total Gas Available (In Gallons):", totalGasAvailable.toFixed(2));

stoppingForGas(Total_Distance, totalGasAvailable, gas_stops);
