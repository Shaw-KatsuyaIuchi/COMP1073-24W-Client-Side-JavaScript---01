/*
	Assignment 1 | COMP1073 Client-Side JavaScript - 01
	Katsuya Iuchi 200538257
	Rubayad
*/


// Class definition for Smoothie
class Smoothie {
    // Constructor for creating a Smoothie object with flavor, extras, and size parameters
    constructor(flavor, extras, size) {
        this.flavor = flavor; // Flavor of the smoothie
        this.extras = extras; // Array containing extra ingredients
        this.size = size;     // Size of the smoothie (small, medium, large)
    }

    // Method to describe the smoothie
    describe() {
        // Initialize total cost with a base price
        let total = 0.00;

        // Get the size of the smoothie
        let Size = this.size;

        // Determine the price based on the size
        if (Size == "Small") {
            total = 8.00;
        } else if (Size == "Medium") {
            total = 10.00;
        } else if (Size == "Large") {
            total = 12.00;
        }

        // Define available flavors
        let flavors = ["Strawberry", "Banana", "Mixed Berries", "Mango"];

        // Calculate additional cost based on the selected flavor
        let add = flavors.indexOf(this.flavor);
        add = (add + 1) * 0.50;

        // Add the flavor cost to the total
        total = total + add;

        // Add the cost of extras (number of extras selected)
        total = total + this.extras.length;

        // Return a string describing the smoothie and its total cost
        return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.extras.join(', ')}. Your total is $${total}`;
    }
}

// Function to create a smoothie object based on user input
function createSmoothie() {
    const flavor = document.getElementById('flavor').value; // Getting the selected flavor from the input field
    const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value); // Getting selected extra ingredients
    const size = document.querySelector('input[name="size"]:checked').value; // Getting the selected size of the smoothie

    const smoothie = new Smoothie(flavor, extras, size); // Creating a new Smoothie object
    displaySmoothie(smoothie); // Displaying the created smoothie
}

// Function to display the smoothie details on the webpage
function displaySmoothie(smoothie) {
    const smoothieOutput = document.getElementById('smoothieOutput'); // Getting the output element
    smoothieOutput.innerHTML = `<p>${smoothie.describe()}</p>`; // Displaying the smoothie description
}
