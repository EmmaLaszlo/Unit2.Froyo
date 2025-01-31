const processOrder = () => {
  // Prompt for froyo flavors input
  const userInput = prompt(
    "Please enter a list of comma-separated froyo flavors."
  );

  // Convert input string into an array
  const flavorsArray = userInput
    .split(",")
    .map((flavor) => flavor.trim().toLowerCase());

  // Making an empty object to count the flavors
  const flavorCounts = {};

  // Loop the array and count each flavor
  for (const flavor of flavorsArray) {
    // If the flavor exists, increment; otherwise, set it to 1
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    // this was so confusing basically if you type the array, each different flavor is "undefined" because JS doesn't have a pre-existing key yet. So when you type "vanilla" the first iteration is 0 + 1 = 1. The second type you see vanilla the "vanilla" key exists so now the value is 1 and you add that to the previous value "1" so its 1+1=2
  }

  console.log("Froyo Order Summary:");
  console.table(flavorCounts); // shows the results as a table

  return flavorCounts; // Returning for the rubric
};

// Call the function outside of its own definition
processOrder();
