let counter = 0; // Keeps track of the total number of donuts
let autoClicker = 0; // Keeps track of the number of auto clickers owned
let autoClickerCost = 100; // Initial cost to purchase an auto clicker

// Function to manually add a donut to the counter
function addDonuts() {
  let donutCount = document.getElementById("donutcounter"); // Get the donut counter display element
  counter = counter + 1; // Increment the donut counter by 1
  donutCount.textContent = "Donut Counter: " + counter; // Update the display with the new counter value
}

// Function to purchase an auto clicker
function addAutoClicker() {
  let autoDonut = document.getElementById("price"); // Get the auto clicker count display element
  let autoClickerCostDisplay = document.getElementById("auto-clicker-costs"); // Get the auto clicker cost display element
  let donutCount = document.getElementById("donutcounter"); // Get the donut counter display element

  // Only execute if you have enough donuts for an auto clicker
  if (counter >= autoClickerCost) {
    counter = counter - autoClickerCost; // Deduct the auto clicker cost from the donut counter
    autoClicker++; // Increment the number of auto clickers owned
    
    autoDonut.textContent = "Auto Clicker: " + autoClicker; // Update the auto clicker count display
    autoClickerCost = Math.round(autoClickerCost * 1.10); // Increase the cost of the next auto clicker by 10%
    donutCount.textContent = "Donut Counter: " + counter; // Update the donut counter display
    autoClickerCostDisplay.textContent = "Auto Clicker Cost: " + autoClickerCost; // Update the auto clicker cost display
  }
}

// Function to activate auto clickers
function activateAutoClicker() {
  setInterval(() => {
    // For each auto clicker, add one donut to the counter every second
    for (let x = 0; x < autoClicker; x++) {
      counter++;
    }
    let donutCount = document.getElementById("donutcounter"); // Get the donut counter display element
    donutCount.textContent = "Donut Counter: " + counter; // Update the display with the new counter value
  }, 1000); // Repeat every second
}

// Start auto clickers when the script loads
activateAutoClicker();
