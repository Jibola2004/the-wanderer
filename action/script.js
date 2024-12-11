// Access elements by their IDs
const close = document.getElementById("close");
const open = document.getElementById("open");
const menu = document.getElementById("menu");

// Function to open the menu
const openMenu = () => {
    menu.style.right = "0";   // Slide-in effect
    menu.style.display = "block";  // Ensure visibility
};

// Function to close the menu
const closeMenu = () => {
    menu.style.right = "-300px";   // Slide-out effect
};

// Add event listeners
if (open && close && menu) {
    open.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
} else {
    console.error("One or more elements not found.");
}
