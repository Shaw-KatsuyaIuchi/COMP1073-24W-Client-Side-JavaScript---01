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
        return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.extras.join(', ')}.`; // Returns a string describing the smoothie
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
